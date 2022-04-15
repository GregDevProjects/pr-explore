import type { NextPage } from "next";
import Head from "next/head";

import App from "../src/App";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PR Explore</title>
        <meta name="description" content="Explore PRs for a selected repo" />
      </Head>

      <main>
        <App />
      </main>
    </>
  );
};

export default Home;
