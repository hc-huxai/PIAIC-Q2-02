import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course: Xplore Skills",
  description: "PIAIC Q2 Assignment #2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
