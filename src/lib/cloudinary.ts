import { createHash } from "crypto";

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

export function generateUploadSignature(folder: string, timestamp: number): string {
  const params = `folder=${folder}&timestamp=${timestamp}${API_SECRET}`;
  return createHash("sha1").update(params).digest("hex");
}

export async function uploadToCloudinary(
  file: Buffer,
  options: {
    folder: string;
    public_id?: string;
    transformation?: string;
    overwrite?: boolean;
  }
): Promise<CloudinaryUploadResult> {
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = createHash("sha1")
    .update(`folder=${options.folder}&timestamp=${timestamp}${API_SECRET}`)
    .digest("hex");

  const form = new FormData();
  form.append("file", `data:image/jpeg;base64,${file.toString("base64")}`);
  form.append("folder", options.folder);
  form.append("timestamp", timestamp.toString());
  form.append("signature", signature);
  form.append("api_key", API_KEY);
  if (options.public_id) form.append("public_id", options.public_id);
  if (options.overwrite !== undefined) form.append("overwrite", options.overwrite.toString());

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: "POST", body: form }
  );

  if (!response.ok) {
    throw new Error(`Cloudinary upload failed: ${await response.text()}`);
  }

  return response.json();
}

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

export async function deleteFromCloudinary(publicId: string): Promise<void> {
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = createHash("sha1")
    .update(`public_id=${publicId}&timestamp=${timestamp}${API_SECRET}`)
    .digest("hex");

  const form = new FormData();
  form.append("public_id", publicId);
  form.append("timestamp", timestamp.toString());
  form.append("signature", signature);
  form.append("api_key", API_KEY);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/destroy`,
    { method: "POST", body: form }
  );

  if (!response.ok) {
    throw new Error(`Cloudinary delete failed: ${await response.text()}`);
  }
}