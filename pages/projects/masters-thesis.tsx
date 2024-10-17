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
              <h2 style={{textAlign: 'center'}}>{`Master's thesis - Tools and practices to improve developer efficiency`}</h2>
              <p style={{textAlign: 'center', marginTop: '16px'}}>
                  If you’re a software developer, click here to take part in <a href="https://docs.google.com/forms/d/e/1FAIpQLScRz9xsQakCssFqv_Jew1diBdGDr1POvcbRRpIubTnKSzPzYQ/viewform?usp=sf_link">my
                  survey</a>.
              </p>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Image
                      src="/gifs/AtAthens6321underconstruction_lemmings.gif"
                      width="600"
                      height="32"
                      unoptimized
                  />
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Image
                      src="/gifs/HeHeartlandGrove2575lineconstruction.gif"
                      width="573"
                      height="18"
                      unoptimized
                  />
              </div>
              <p style={{textAlign: 'center', marginTop: '16px'}}>
                  Discover the key findings from the survey!
                  Submit <a href="https://docs.google.com/forms/d/e/1FAIpQLSeqr9wSBcmEX3Q202Ha5vnX8n8rccDfuS7ohr4Uej_Nt2IMdQ/viewform?usp=sf_link">this
                  form</a> to receive the summary as soon as it’s ready.
              </p>
          </section>
      </main>
    </div>
  );
};

export default Home;
