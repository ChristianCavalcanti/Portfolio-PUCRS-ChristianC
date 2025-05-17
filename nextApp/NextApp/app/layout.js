import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sabedoria Grega",
  description: "Explore o pensamento de Sócrates, Platão e Aristóteles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className + " bg-white text-gray-900"}>
        {children}
      </body>
    </html>
  );
}
