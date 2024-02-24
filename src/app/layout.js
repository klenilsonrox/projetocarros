
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AllProvider } from "@/components/AllContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "compre seu carro",
  description: "encontre o carro do seu interesse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
      <AllProvider>
      <Header />      
      {children}
      <Footer />
      </AllProvider>
      </body>
    </html>
  );
}
