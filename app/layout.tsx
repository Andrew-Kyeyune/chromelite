import type { Metadata, Viewport } from "next";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/ui";
import { SITE } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Chromelite Technologies | IT, Data, Design & Signage Kampala",
    template: "%s | Chromelite",
  },
  description: SITE.metaDescription,
  applicationName: SITE.shortName,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "business",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
    title: "Chromelite Technologies — One partner, from systems to storefront",
    description: SITE.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Chromelite Technologies — IT, Data, Design, Marketing and Signage" }],
  },
  twitter: { card: "summary_large_image", title: "Chromelite Technologies", description: SITE.description, images: ["/og-image.png"] },
  icons: { icon: [{ url: "/favicon.ico", sizes: "32x32" }, { url: "/icon.svg", type: "image/svg+xml" }], apple: "/apple-touch-icon.png" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  // After verifying the site in Google Search Console / Bing Webmaster Tools, paste the codes here:
  // verification: { google: "YOUR-GOOGLE-CODE", other: { "msvalidate.01": "YOUR-BING-CODE" } },
  other: { "geo.region": "UG-102", "geo.placename": "Kampala" },
};

export const viewport: Viewport = { themeColor: "#A51E25", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-UG">
      <body>
        <a href="#main" className="skip">Skip to main content</a>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <a className="wa-float" href={SITE.whatsapp} target="_blank" rel="noopener" aria-label="Chat with Chromelite on WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg>
        </a>
      </body>
    </html>
  );
}
