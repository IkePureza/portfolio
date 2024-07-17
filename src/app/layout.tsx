import { NavBar } from "@/components/NavBar";
import "./globals.css";
import { Social } from "@/components/Social";
import { Email } from "@/components/Email";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Henrique Pureza",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-navy text-white">
        <NavBar></NavBar>
        <Social></Social>
        <Email></Email>
        <div id="content">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
