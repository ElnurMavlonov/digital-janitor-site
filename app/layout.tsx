import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Digital Janitor - Organize Your Downloads Folder",
  description: "Automatically organize messy files into smart categories in seconds. Privacy-first, runs 100% offline.",
  keywords: ["file organizer", "downloads folder", "mac app", "file cleanup", "desktop app"],
  openGraph: {
    title: "The Digital Janitor",
    description: "Your Downloads Folder, Finally Tamed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

