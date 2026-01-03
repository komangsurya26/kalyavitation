import type { Metadata } from "next";
import {
  marcellus,
  poppins,
  playfairDisplay,
  pinyonScript,
  cormorant,
  greatVibes,
} from "@/lib/fonts";
import "./globals.css";

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
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${marcellus.variable} 
          ${poppins.variable} 
          ${playfairDisplay.variable} 
          ${pinyonScript.variable} 
          ${cormorant.variable} 
          ${greatVibes.variable} 
          antialiased
        `}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
