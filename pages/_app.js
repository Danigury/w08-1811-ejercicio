import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "../styles/global.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  // const [checkLocalStorage, setCheckLocalStorage] = useState(null);
  // useEffect(() => {
  //   setCheckLocalStorage(localStorage.getItem(""));
  // }, []);
  return (
    <>
      <Head>
        <title>Yeray Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
