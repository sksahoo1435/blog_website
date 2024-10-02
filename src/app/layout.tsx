import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/NavAndFooter/navBar/page";
import Footer from "./NavAndFooter/footer/page";

export const metadata: Metadata = {
  title: "Blog Application",
  description: "Blogging Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/blog.png" />
      </head>
      <body
        className={` flex flex-col min-h-screen`}
      >
        <header className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </header>
        <main className="flex-grow pt-16">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
