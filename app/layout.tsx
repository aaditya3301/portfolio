import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";

export const metadata: Metadata = {
  title: "Aaditya Singhal | AI & Cloud Engineer",
  description: "AI Engineer skilled in Machine Learning, Deep Learning, and Generative AI. Building scalable, real-time AI systems on cloud platforms.",
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
