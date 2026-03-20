import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://academy-demo.up.railway.app";
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Elevate Academy";

interface MetaOpts {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function buildMeta({ title, description, path = "", noIndex }: MetaOpts): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: `${title} — ${SITE_NAME}`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: { title: `${title} — ${SITE_NAME}`, description, url, siteName: SITE_NAME, type: "website" },
    twitter: { card: "summary_large_image", title: `${title} — ${SITE_NAME}`, description },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
