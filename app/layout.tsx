import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import './globals.css'
import "./style.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Xplore Skills",
  description: "PIAIC Q2 Assignment #2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
