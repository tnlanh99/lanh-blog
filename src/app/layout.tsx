import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lanh Blog",
  description: "A blog about software development and other things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
