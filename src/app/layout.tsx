import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import styles from "./layout.module.css";
import Footer from "./ui/footer";
import Header from "./ui/header";
import Navbar from "./ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.appContainer}>
          <Header />
          <Navbar />
          <div className={styles.content}>{children}</div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
