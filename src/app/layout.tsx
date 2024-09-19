import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Rhenania Stuttgart",
  description: "Corps Rhenania Stuttgart",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
