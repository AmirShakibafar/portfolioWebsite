import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import the Navbar
import FooterSection from "@/components/FooterSection";

const iranSans = localFont({
  src: [
    { path: "./fonts/IranSansX/IRANSansX-Thin.ttf", weight: "100" },
    { path: "./fonts/IranSansX/IRANSansX-UltraLight.ttf", weight: "200" },
    { path: "./fonts/IranSansX/IRANSansX-Light.ttf", weight: "300" },
    { path: "./fonts/IranSansX/IRANSansX-Regular.ttf", weight: "400" },
    { path: "./fonts/IranSansX/IRANSansX-Medium.ttf", weight: "500" },
    { path: "./fonts/IranSansX/IRANSansX-DemiBold.ttf", weight: "600" },
    { path: "./fonts/IranSansX/IRANSansX-Bold.ttf", weight: "700" },
    { path: "./fonts/IranSansX/IRANSansX-ExtraBold.ttf", weight: "800" },
    { path: "./fonts/IranSansX/IRANSansX-Black.ttf", weight: "900" },
    { path: "./fonts/IranSansX/IRANSansX-ExtraBlack.ttf", weight: "950" },
  ],
  variable: "--font-iran",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${iranSans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <FooterSection/>
      </body>
    </html>
  );
}
