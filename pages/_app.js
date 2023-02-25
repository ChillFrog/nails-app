import "../styles/globals.css";
import React from "react";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <main className={openSans.className}>
        <Component {...pageProps} />
      </main>
    </React.StrictMode>
  );
}

export default MyApp;
