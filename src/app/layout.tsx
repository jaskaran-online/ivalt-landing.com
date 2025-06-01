import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "iVALT",
  description: "Innovative identity solutions for modern security challenges. Protecting your digital future with advanced authentication technology.",
  keywords: ["iVALT", "identity", "authentication", "security", "biometrics", "facial recognition", "fingerprint", "iris recognition", "on-demand ID", "universal biometric ID", "docuID", "mobile-centric identity", "real-time identity", "document access control", "AI-adaptive solutions", "next-gen security"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "iVALT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
