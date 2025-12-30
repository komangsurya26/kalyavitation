import {
  Marcellus,
  Poppins,
  Playfair_Display,
  Pinyon_Script,
  Cormorant,
  Great_Vibes,
} from "next/font/google";

export const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-marcellus",
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const pinyonScript = Pinyon_Script({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-pinyon-script",
});

export const cormorant = Cormorant({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-great-vibes",
});
