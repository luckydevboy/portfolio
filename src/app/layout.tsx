import { Nunito } from "next/font/google";

import "./globals.css";
import { Header } from "@/components";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
