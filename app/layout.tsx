import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/Navbar"; 
import Footer from "./component/Footer";

export const metadata: Metadata = {
  title: "TeknoKreatif Solutions",
  description: "Company profile sederhana dengan Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Navbar />
     
        <main className="main-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}