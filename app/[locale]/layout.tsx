import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Header } from "@/app/[locale]/components/header";
import { useMessages } from "next-intl";
import Footer from "@/app/[locale]/components/footer";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <head>
        <title>centrootticorizzo.it</title>
      </head>
      <body className={inter.className}>
        <div className="app-container">
          <NextIntlClientProvider messages={messages}>
            <Header></Header>
            <main>{children}</main>
          </NextIntlClientProvider>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
