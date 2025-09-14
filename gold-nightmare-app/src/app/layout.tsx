import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gold Nightmare",
  description: "Gold Nightmare Trading Analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body>{children}</body>
    </html>
  );
}
