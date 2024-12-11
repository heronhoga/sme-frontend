import localFont from "next/font/local";
import "./globals.css";

const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.woff",
  variable: "--font-poppins",
});


export const metadata = {
  title: "FundiFY",
  description: "FundiFY - Aplikasin",
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
      </body>
    </html>
  );
}
