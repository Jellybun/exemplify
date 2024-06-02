import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import i18n from '../../i18n'

import { ClerkProvider } from '@clerk/nextjs'


// Components
import NavBar from './components/navbar'
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exemplify",
  description: "Exemplify is...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          userButtonAvatarBox: "hidden",
          userButtonOuterIdentifier: "font-semibold text-gray-700 cursor-pointer hover:text-black text-md transform scale-125 px-4 py-1"
        }
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
