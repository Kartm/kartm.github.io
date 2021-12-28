import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Łukasz Blachnicki | Privacy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <h2>Privacy</h2>

          <p>
            We use tracking technologies, such as cookies, to collect
            information about you.
          </p>

          <h2>What are cookies</h2>

          <p>
            Cookies are small data files stored on your hard drive or in device
            memory. They help to improve the Service and your experience, see
            which areas and features of the Service are popular, and count
            visits.
          </p>

          <h2>Third-party cookies</h2>

          <p>
            We use various third-parties cookies to report usage statistics of
            the Service. We work with third party analytics providers who use
            cookies, web beacons, device identifiers, and other technologies to
            collect information about your use of the Service and other websites
            and applications, including your IP address, web browser, mobile
            network information, pages viewed, time spent on pages or in mobile
            apps, and links clicked. This information may be used by the Service
            to, among other things, analyze and track data, and determine the
            popularity of certain content.
          </p>

          <h2>Your choices</h2>

          <p>
            You can decline using the cookies when asked in a constent dialog.
            If you have already accepted the usage of cookies, you can adjust
            your browser settings to remove or reject cookies. Please note that
            removing or rejecting cookies could affect the availability and
            functionality of the Service.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
