// Cloudinary configuration — lazy init to avoid build-time errors

interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
}

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";
const API_KEY = process.env.CLOUDINARY_API_KEY || "";
const API_SECRET = process.env.CLOUDINARY_API_SECRET || "";

export function getCloudinaryConfig() {
  return { cloudName: CLOUD_NAME, apiKey: API_KEY, apiSecret: API_SECRET };
}

// Generate a signed upload params for client-side unsigned upload
export function generateUploadSignature(folder: string, timestamp: number): string {
  const crypto = require("crypto");
  const params = `folder=${folder}&timestamp=${timestamp}${API_SECRET}`;
  return crypto.createHash("sha1").update(params).digest("hex");
}

// Server-side upload via API
export async function uploadToCloudinary(
  file: Buffer,
  options: {
    folder: string;
    public_id?: string;
    transformation?: string;
    overwrite?: boolean;
  }
): Promise<CloudinaryUploadResult> {
  const FormData = (await import("form-data")).default;
  const crypto = require("crypto");

  const timestamp = Math.floor(Date.now() / 1000);
  const signature = crypto
    .createHash("sha1")
    .update(`folder=${options.folder}&timestamp=${timestamp}${API_SECRET}`)
    .digest("hex");

  const form = new FormData();
  form.append("file", file.toString("base64"));
  form.append("folder", options.folder);
  form.append("timestamp", timestamp.toString());
  form.append("signature", signature);
  form.append("api_key", API_KEY);
  if (options.public_id) form.append("public_id", options.public_id);
  if (options.overwrite !== undefined) form.append("overwrite", options.overwrite.toString());

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: form as any,
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Cloudinary upload failed: ${error}`);
  }

  return response.json();
}

// Build optimized URL with transformations
export function cloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: string;
    crop?: string;
  } = {}
): string {
  const transforms: string[] = [];
  if (options.width) transforms.push(`w_${options.width}`);
  if (options.height) transforms.push(`h_${options.height}`);
  if (options.quality) transforms.push(`q_${options.quality}`);
  if (options.format) transforms.push(`f_${options.format}`);
  if (options.crop) transforms.push(`c_${options.crop}`);
  const transformStr = transforms.length > 0 ? `${transforms.join(",")}/` : "";
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformStr}${publicId}`;
}

// Delete an image
export async function deleteFromCloudinary(publicId: string): Promise<void> {
  const crypto = require("crypto");
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = crypto
    .createHash("sha1")
    .update(`public_id=${publicId}&timestamp=${timestamp}${API_SECRET}`)
    .digest("hex");

  const form = new (await import("form-data")).default();
  form.append("public_id", publicId);
  form.append("timestamp", timestamp.toString());
  form.append("signature", signature);
  form.append("api_key", API_KEY);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/destroy`,
    {
      method: "POST",
      body: form as any,
    }
  );

  if (!response.ok) {
    throw new Error(`Cloudinary delete failed: ${await response.text()}`);
  }
}