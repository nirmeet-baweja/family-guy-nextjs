import path from "path";

const dev = process.env.NEXT_PUBLIC_VERCEL_ENV !== "production";
export const endpoint = path.join(
  dev ? `http:/` : `https:/`,
  process.env.NEXT_PUBLIC_VERCEL_URL,
  "api"
);
