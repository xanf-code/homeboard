import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import { ReactQueryProvider } from "./ReactQueryProvider";

const ibm = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Home | Dashboard",
  description: "Home Automation Dashboard",
};

export default async function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={`${ibm.className} mx-auto p-5 bg-black`}>
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
