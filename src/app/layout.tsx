import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

// Metadata for SEO and favicon
export const metadata: Metadata = {
  title: "Ant Services",
  description: "Premium products for gaming.",
  icons: {
    icon: "/favicon.png", // Make sure your logo is saved in public/favicon.png
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Optional: extra meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-rubik bg-[#0c0c0c] text-white antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
