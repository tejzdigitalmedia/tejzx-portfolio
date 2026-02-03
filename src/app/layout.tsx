import { Inter, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata = {
  title: "TejzX | Film & Digital Creative Agency",
  description: "A premier hybrid agency specializing in Film Marketing, Digital Promotion, and Creative Content. Founded by Kodam Sai Vishwa Teja.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
