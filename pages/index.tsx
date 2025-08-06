import styles from "../styles/Home.module.css";
import Image from "next/image";
import type { NextPageWithLayout } from './_app'
import MainLayout from "../layouts/main-layout";

const Home: NextPageWithLayout = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section>
                    <div>
                        <Image
                            src="/gifs/john-travolta-lost.gif"
                            width="220"
                            height="212"
                            unoptimized
                            alt="placeholder"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
};

export const meta = { title: 'Home' }
Home.getLayout = (page) => <MainLayout meta={meta}>{page}</MainLayout>

export default Home;
