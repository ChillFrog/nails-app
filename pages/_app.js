import "../styles/globals.css";
import React from "react";
import { Open_Sans } from "@next/font/google";
import { Provider } from "react-redux";
import store from "../store/store";

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={openSans.className}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  );
}

export default MyApp;
