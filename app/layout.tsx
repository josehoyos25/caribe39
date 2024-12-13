import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Renault Caribe Cali",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/renault2.png" type="image/x-icon" />
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}