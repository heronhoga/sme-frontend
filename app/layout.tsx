import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.woff",
  variable: "--font-poppins",
});


export const metadata = {
  title: "Niago - Platform untuk investasi UKM",
  description: "Niago - Platform untuk investasi UKM",
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
        <Toaster />
      </body>
    </html>
  );
}
