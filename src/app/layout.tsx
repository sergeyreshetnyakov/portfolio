import type { Metadata } from "next";
import "../components/globals.css";
import StoreProvider from "../components/StoreProvider";

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
         <body>
            <StoreProvider>
               {children}
               <div className="flex mt-24 bg-black h-8"></div>
            </StoreProvider>
         </body>
      </html>
   );
}
