'use client';
import "./globals.css";
import { Header } from "@/components/Common/Header";
import { LoadingProvider } from "@/context/LoadingContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <LoadingProvider>
          <Header />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
