import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isaac Kurdi — Video Editor, AI Video Creator & Digital Marketer",
  description:
    "Portfolio of Isaac Ahmad Kurdi — video editor, AI video creator and digital marketer specializing in short-form content, social media, advertising and creative marketing.",
  keywords: [
    "Isaac Kurdi",
    "Isaac Ahmad Kurdi",
    "Video Editor",
    "AI Video Creator",
    "Digital Marketer",
    "Lebanon",
    "Reels Editor",
    "TikTok Editor",
    "Meta Ads",
    "Fun Forge Labs",
    "Game Marketing",
  ],
  authors: [{ name: "Isaac Ahmad Kurdi" }],
  openGraph: {
    title: "Isaac Kurdi — Video Editor, AI Video Creator & Digital Marketer",
    description:
      "Portfolio of Isaac Ahmad Kurdi — video editor, AI video creator and digital marketer specializing in short-form content, social media, advertising and creative marketing.",
    url: "https://isaackurdi.com",
    siteName: "Isaac Kurdi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Kurdi — Video Editor, AI Video Creator & Digital Marketer",
    description:
      "Portfolio of Isaac Ahmad Kurdi — video editor, AI video creator and digital marketer specializing in short-form content, social media, advertising and creative marketing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: "#090d16", color: "#f8fafc" }}>
      <body className="antialiased font-sans bg-[#090d16] text-slate-100 selection:bg-primary-500 selection:text-white" style={{ backgroundColor: "#090d16", color: "#f8fafc", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
