import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Plops Bot - AI Chat Assistant",
  description: "An intelligent chat assistant powered by AI to help answer your questions and provide assistance.",
  keywords: ["AI", "chat", "assistant", "bot", "help", "support"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Plops Bot - AI Chat Assistant",
    description: "An intelligent chat assistant powered by AI to help answer your questions and provide assistance.",
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Plops Bot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plops Bot - AI Chat Assistant",
    description: "An intelligent chat assistant powered by AI to help answer your questions and provide assistance.",
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
