import type { AppProps } from "next/app";
import Head from "next/head";
import { UserProvider } from "../context/UserContext";
import "../styles/globals.css";
import Layout from "../lib/components/layout/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Profile Explorer</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </>
  );
};

export default App;
