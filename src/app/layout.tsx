import type { Metadata } from "next";
import "@ant-design/v5-patch-for-react-19";
import "./globals.css";
import { League_Spartan } from "next/font/google";

export const metadata: Metadata = {
  title: "Course Player",
  description: "Course Player",
};

const league_spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={league_spartan.className}>{children}</body>
    </html>
  );
}
