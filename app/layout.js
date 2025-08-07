import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

const Kaio = localFont({
  src: [{ path: "../public/font/Kaio-Black.ttf" }],
  variable: "--font-kaio"
});

const geist = Geist({
  variable: "--font-geist-sans",
  weight: "400",
  subsets: ["latin"]
});

export const metadata = {
  title: "TechWithInnovation | Web Design Agency",
  description:
    "We craft exceptional digital experiences that drive growth, engage users, and transform businesses through cutting-edge technology and innovative design."
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${Kaio.variable}`} 
    >
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
