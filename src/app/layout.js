import { Inter } from "next/font/google";
import "./globals.css";
import AppProvider from "../../Redux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NOSA Admin Dashboard",
  description: "This is the official dashboard for NOSA web application",
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AppProvider>
  );
}
