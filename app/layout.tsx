import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/elements/Navbar";
import { Footer } from "@/components/elements/Footer";
import { Raleway, JetBrains_Mono, Inter } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
    title: "Ciência da Computação | UNIR",
    description:
        "Conheça o curso de Ciência da Computação da Universidade Federal de Rondônia. Descubra nossos projetos de pesquisa, estrutura, corpo docente e vida universitária.",
    keywords: [
        "Ciência da Computação",
        "UNIR",
        "Engenharia de Software",
        "Tecnologia",
        "Faculdade de Computação",
        "Graduação",
    ],
};
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html
          lang="pt-BR"
          className={cn("min-h-screen", raleway.variable, jetbrainsMono.variable, "font-sans", inter.variable)}
      >
          <body className="min-h-full flex flex-col">
              <Navbar />
              <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
                {children}
              </main>
              <Footer />
          </body>
      </html>
  );
}