import type { Metadata } from "next";
import "../components/globals.css";
import StoreProvider from "../components/StoreProvider";

export const metadata: Metadata = {
   title: "Портфолио",
   description: "",
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
               <div className="flex bg-black h-8 shadow-xl rounded-t-lg"></div>
            </StoreProvider>
         </body>
      </html>
   );
}
