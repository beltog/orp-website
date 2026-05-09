// Évoliz API integration — invoicing and CRM sync for Olivier Reynes Photography
// Docs: https://doc.evoliz.com/api/

const EVOLIZ_BASE_URL = "https://www.evoliz.com/api/v1";

function getEvolizHeaders() {
  const token = process.env.EVOLIZ_API_TOKEN;
  if (!token) throw new Error("EVOLIZ_API_TOKEN is not set");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

// Create a client in Évoliz CRM
export async function createEvolizClient(client: {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  zip?: string;
  country?: string;
}) {
  const response = await fetch(`${EVOLIZ_BASE_URL}/clients`, {
    method: "POST",
    headers: getEvolizHeaders(),
    body: JSON.stringify({
      name: client.name,
      email: client.email,
      phone: client.phone || "",
      address1: client.address || "",
      city: client.city || "",
      zip: client.zip || "",
      country: client.country || "FR",
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Évoliz client creation failed:", error);
    throw new Error(`Évoliz error: ${response.status}`);
  }

  return response.json();
}

// Create an invoice in Évoliz
export async function createEvolizInvoice(invoice: {
  clientId: string;
  items: { description: string; quantity: number; unitPrice: number; tax: number }[];
  dueDate?: string;
  notes?: string;
}) {
  const response = await fetch(`${EVOLIZ_BASE_URL}/invoices`, {
    method: "POST",
    headers: getEvolizHeaders(),
    body: JSON.stringify({
      client_id: invoice.clientId,
      due_date: invoice.dueDate || new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0],
      notes: invoice.notes || "",
      items: invoice.items.map((item, i) => ({
        row_order: i + 1,
        description: item.description,
        quantity: item.quantity,
        unit_price: item.unitPrice,
        tax_id: item.tax,
      })),
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Évoliz invoice creation failed:", error);
    throw new Error(`Évoliz error: ${response.status}`);
  }

  return response.json();
}

// Get clients list
export async function getEvolizClients(params?: { search?: string; page?: number }) {
  const queryParams = new URLSearchParams();
  if (params?.search) queryParams.set("search", params.search);
  if (params?.page) queryParams.set("page", params.page.toString());

  const response = await fetch(`${EVOLIZ_BASE_URL}/clients?${queryParams}`, {
    headers: getEvolizHeaders(),
  });

  if (!response.ok) {
    throw new Error(`Évoliz error: ${response.status}`);
  }

  return response.json();
}

// Get invoices
export async function getEvolizInvoices(params?: { status?: string; page?: number }) {
  const queryParams = new URLSearchParams();
  if (params?.status) queryParams.set("status", params.status);
  if (params?.page) queryParams.set("page", params.page.toString());

  const response = await fetch(`${EVOLIZ_BASE_URL}/invoices?${queryParams}`, {
    headers: getEvolizHeaders(),
  });

  if (!response.ok) {
    throw new Error(`Évoliz error: ${response.status}`);
  }

  return response.json();
}

// Sync an order to Évoliz (create client + invoice)
export async function syncOrderToEvoliz(order: {
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  items: { description: string; quantity: number; unitPrice: number }[];
  notes?: string;
}) {
  // 1. Create or find client
  let clientId: string;
  try {
    const existingClients = await getEvolizClients({ search: order.customerEmail });
    if (existingClients.data?.length > 0) {
      clientId = existingClients.data[0].id;
    } else {
      const newClient = await createEvolizClient({
        name: order.customerName,
        email: order.customerEmail,
        phone: order.customerPhone,
      });
      clientId = newClient.id;
    }
  } catch {
    // If Évoliz is not configured, skip
    console.warn("Évoliz client creation skipped");
    return null;
  }

  // 2. Create invoice
  try {
    const invoice = await createEvolizInvoice({
      clientId,
      items: order.items.map((item) => ({
        description: item.description,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        tax: 20, // French VAT 20%
      })),
      notes: order.notes,
    });
    return invoice;
  } catch {
    console.warn("Évoliz invoice creation skipped");
    return null;
  }
}