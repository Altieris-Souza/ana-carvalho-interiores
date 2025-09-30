import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
