import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NextUp | Career Roadmap Mobile App for Students",
  description:
    "NextUp is an AI-powered mobile app for iOS and Android designed for underclassmen and any student who wants to land internships, scholarships, and research opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Force light mode for this design as requested (white theme)
                 document.documentElement.classList.remove('dark');
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}