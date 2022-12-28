import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Enzo Spagnolli</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
