"use client";
import "./globals.css";
import { Header } from "@/components/Common/Header";
import { LoadingProvider } from "@/context/LoadingContext";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <QueryClientProvider client={queryClient}>
          <LoadingProvider>
            <Header />
            {children}
          </LoadingProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
