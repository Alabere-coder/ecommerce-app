import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@arco-design/web-react/dist/css/arco.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce-ui Website",
  description: "Created by A.I.S.S",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
