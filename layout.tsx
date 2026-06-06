import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "जनार्दन न्यूज़ — सत्य। तथ्य। जन की आवाज़।",
  description: "जनार्दन न्यूज़ — झारखंड और भारत की सबसे विश्वसनीय हिंदी समाचार वेबसाइट। ताज़ा खबरें, राजनीति, खेल, तकनीक, शिक्षा और मनोरंजन।",
  keywords: "जनार्दन न्यूज़, झारखंड समाचार, हिंदी न्यूज़, ब्रेकिंग न्यूज़, Janardan News, Jharkhand News",
  openGraph: {
    title: "जनार्दन न्यूज़ — सत्य। तथ्य। जन की आवाज़।",
    description: "झारखंड और भारत की सबसे विश्वसनीय हिंदी समाचार वेबसाइट।",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "जनार्दन न्यूज़",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='16' fill='%23CC0000'/><text x='50' y='72' font-size='60' font-weight='900' font-family='sans-serif' fill='white' text-anchor='middle'>JN</text></svg>"/>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Rajdhani:wght@600;700;800;900&family=Source+Sans+3:wght@400;600;700&family=Noto+Serif+Devanagari:wght@500;700;900&family=Noto+Sans+Devanagari:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="beforeInteractive" />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
        <Script id="netlify-identity-redirect" strategy="afterInteractive">
          {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
