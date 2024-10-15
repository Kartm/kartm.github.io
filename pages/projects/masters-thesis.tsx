import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Łukasz Blachnicki | Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <section>
              <h2>{`Master's thesis - Tools and practices to improve developer efficiency`}</h2>
              <Image src="/gifs/AtAthens6321underconstruction_lemmings.gif" width="600" height="32"/>
              <Image src="/gifs/HeHeartlandGrove2575lineconstruction.gif" width="573" height="18" />
          </section>
      </main>
    </div>
  );
};

export default Home;
