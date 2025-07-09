import React from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "InterZone Technologies LLC",
  description: "Empowering Communities Through Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
