import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Apartment",
  description: "Modern web template",
};

/* --- Next.js lokální font pro optimální načítání --- */
const urwGothic = localFont({
  src: [
    { path: "../public/fonts/URWGothic-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/URWGothic-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* `urwGothic.variable` připojí font do CSS proměnné + font-sans z Tailwindu */}
      <body className={`${urwGothic.variable} font-sans bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
