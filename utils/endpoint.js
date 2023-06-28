const dev = process.env.NEXT_PUBLIC_VERCEL_ENV !== "production";
export const endpoint =
  (dev ? `http://` : `https://`) + `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/`;
