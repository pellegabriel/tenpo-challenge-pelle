import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClerkProviderWrapper from "@/providers/ClerkProviderWrapper";
import { LoadingProvider } from "./components/LoadingProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tenpo Challenge - Modern Financial Management",
  description: "A modern financial management solution designed to simplify your transaction tracking and payment processing. Experience real-time transactions, secure payments, and comprehensive financial history.",
  keywords: "financial management, transactions, payments, banking, real-time tracking",
  authors: [{ name: "Gabriel Pelle" }],
  openGraph: {
    title: "Tenpo Challenge - Modern Financial Management",
    description: "A modern financial management solution designed to simplify your transaction tracking and payment processing.",
    type: "website",
    locale: "en_US",
    siteName: "Tenpo Challenge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenpo Challenge - Modern Financial Management",
    description: "A modern financial management solution designed to simplify your transaction tracking and payment processing.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ClerkProviderWrapper>
          <ErrorBoundary>
            <LoadingProvider>
              <Navbar />
              <div className="fixed inset-0 -z-1">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>
                <div className="absolute inset-0 bg-[linear-gradient(var(--cyber-grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              </div>
              <main className="flex-1">
                <div className="container mx-auto px-4 py-8 pb-24">
                  {children}
                </div>
              </main>
              <Footer />
            </LoadingProvider>
          </ErrorBoundary>
        </ClerkProviderWrapper>
      </body>
    </html>
  );
}
