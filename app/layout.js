import { Geist } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import ThemeProvider from "./components/ThemeProvider";

const Kaio = localFont({
  src: [{
    path: "../public/font/Kaio-Black.ttf"
  }],

  variable: "--font-kaio",
});

const geist = Geist({
  variable: "--font-geist-sans",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "TechWithInnovation | Web Design Agency",
  description: "We craft exceptional digital experiences that drive growth, engage users, and transform businesses through cutting-edge technology and innovative design.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}

            <Toaster position="top-center" richColors />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
