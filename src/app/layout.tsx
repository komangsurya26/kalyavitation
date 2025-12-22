import type { Metadata } from "next";
import { Marcellus, Poppins } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-marcellus",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Kalyavitation | Solusi Mudah Buat Undangan Digital",
  description:
    "Bagikan moment bahagia kamu bersama Kalyavitation. Solusi mudah custom undangan pernikahan langsung tanpa ribet, praktis, dan Up to Date dengan sentuhan digital!",
  openGraph: {
    title: "Kalyavitation | Solusi Mudah Buat Undangan Digital",
    description:
      "Bagikan moment bahagia kamu bersama Kalyavitation. Solusi mudah custom undangan pernikahan langsung tanpa ribet, praktis, dan Up to Date dengan sentuhan digital!",
    type: "website",
    url: "https://kalyavitation.com",
    locale: "id_ID",
    siteName: "Kalyavitation",
    images: [
      {
        url: "https://kalyavitation.com/logometa.png",
        alt: "Kalyavitation",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-96x96.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${poppins.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
