import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryProvider } from "./ReactQueryProvider";

const ibm = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });
const queryClient = new QueryClient();

export const metadata = {
  title: "Home | Dashboard",
  description: "Home Automation Dashboard",
};

export default async function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={`${ibm.className} mx-auto p-5`}>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
