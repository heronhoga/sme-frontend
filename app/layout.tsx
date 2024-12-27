import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import FloatingIcon from "@/my-components/floating-icon";

const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.woff",
  variable: "--font-poppins",
});


export const metadata = {
  title: "Sinergo - Platform untuk investasi UKM",
  description: "Sinergo - Platform untuk investasi UKM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${poppinsRegular.variable} antialiased`}
      >
        {children}
        <FloatingIcon /> {/* Add the FloatingIcon component here */}
        <Toaster />
      </body>
    </html>
  );
}
