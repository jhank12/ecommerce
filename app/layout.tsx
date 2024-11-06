import "./globals.css";

import { Metadata } from "@/node_modules/next/types";

import StoreProvider from "./StoreProvider";

import NavBar from "./components/NavBar/NavBar";

export const metadata: Metadata = {
  title: "test",
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
          <section className="siteContainer">
            <div className="contentContainer">
              <NavBar />

              {children}
            </div>
          </section>
        </StoreProvider>
      </body>
    </html>
  );
}
