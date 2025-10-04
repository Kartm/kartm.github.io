import styles from "../styles/Home.module.css";
import type { NextPageWithLayout } from './_app'
import MainLayout from "../layouts/main-layout";
import {useEffect} from "react";

const Home: NextPageWithLayout = () => {
    useEffect(() => {
        const url = "/projects/what-really-matters-in-software-developer-productivity"
        window.location.href = url
    })

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section/>
            </main>
        </div>
    );
};

export const meta = { title: 'Home' }
Home.getLayout = (page) => <MainLayout meta={meta}>{page}</MainLayout>

export default Home;
