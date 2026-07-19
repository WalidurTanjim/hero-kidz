import { Poppins } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

export const senFont = localFont({
  src: "../fonts/Sen-VariableFont_wght.ttf",
})

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"]
});

export const metadata = {
  metadataBase: new URL("https://hero-kidz-kappa-one.vercel.app"),

  title: {
    default: "HeroKidz | Buy Toys for Kids Online in Bangladesh",
    template: "%s | HeroKidz",
  },

  description:
    "HeroKidz is an online toy store where you can buy fun, educational, and creative toys for kids. Explore a wide range of kids products including learning tools, costumes, games, and more.",

  keywords: [
    "kids toys",
    "buy toys online",
    "children toys Bangladesh",
    "educational toys",
    "kids learning toys",
    "kids costume",
    "toy shop online",
    "HeroKidz",
  ],

  authors: [{ name: "HeroKidz Team" }],
  creator: "HeroKidz",
  publisher: "HeroKidz",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "HeroKidz - Buy Toys for Kids Online",
    description:
      "Discover fun and educational toys for kids at HeroKidz. Shop now for amazing deals and discounts!",
    url: "https://hero-kidz-kappa-one.vercel.app",
    siteName: "HeroKidz",
    images: [
      {
        url: "/og-image.png", // 👉 custom create করবা (recommended)
        width: 1200,
        height: 630,
        alt: "HeroKidz Toys Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HeroKidz - Kids Toy Store",
    description:
      "Buy fun, safe and educational toys for kids online.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
