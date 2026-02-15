import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Ant Services - #1 Destination for Gaming Needs",
  description: "Ant Services offers premium products for FiveM, Call of Duty, Fortnite, Battlefield 6, Rainbow Six Siege, and CS2.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-rubik">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
