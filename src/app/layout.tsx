import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Ana Carvalho - Design de Interiores",
  description:
    "Designer de interiores com mais de 7 anos de experiência. Transformamos espaços em ambientes únicos que refletem sua personalidade e estilo.",
  keywords:
    "design de interiores, arquitetura, decoração, projetos residenciais, projetos comerciais, Curitiba",
  authors: [{ name: "Ana Carvalho" }],
  openGraph: {
    title: "Studio Ana Carvalho",
    description: "Designer de interiores com mais de 7 anos de experiência",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
