import "./globals.css";
import { Inter } from "next/font/google";
import { Navigation } from "../components/Navigation.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Family Guy",
  description: "A full stack Family Guy Quiz App built using NextJS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
