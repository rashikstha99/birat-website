import { EB_Garamond, Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/common/Header";
import Footer from "@/common/Footer";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "500", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Birat Health College | Home",
  description: "Welcome to Birat Health College official website, a trusted educational institution dedicated to empowering individuals and communities through education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} ${lato.variable} antialiased`}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
