import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Shoprite Freshmark Ghana | Premium Grocery Store Accra',
  description: 'Shoprite Freshmark Ghana is Accra\'s premium destination for fresh fruits, vegetables, groceries, and fast delivery service. Experience quality, freshness, and convenience.',
  openGraph: {
    "title": "Shoprite Freshmark Ghana | Premium Grocery Store",
    "description": "Premium fresh produce and groceries delivered to your door in Accra.",
    "siteName": "Shoprite Freshmark Ghana"
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
