import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cafe Bloom | Café de Especialidad en Santa Catarina, Nuevo León",
  description:
    "Descubre Cafe Bloom - una acogedora cafetería en Santa Catarina que ofrece café de especialidad, bebidas especiales, postres y un espacio de trabajo perfecto con Wi-Fi rápido. Calificado 4.8★ por más de 70 clientes felices.",
  keywords: [
    "cafe",
    "cafetería",
    "Santa Catarina",
    "Nuevo León",
    "café de especialidad",
    "espacio de trabajo",
    "coworking",
    "matcha",
    "postres",
  ],
  openGraph: {
    title: "Cafe Bloom | Café de Especialidad en Santa Catarina",
    description:
      "Café, comodidad y buenas vibras en Santa Catarina. Bebidas especiales, ambiente acogedor y Wi-Fi rápido.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
