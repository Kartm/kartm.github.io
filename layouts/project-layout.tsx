import {useEffect} from "react";
import tocbot from "tocbot";
import MainLayout, {LayoutMeta} from "./main-layout";
import styles from '../styles/project-layout.module.css'

function ClientTOC() {
    useEffect(() => {
        tocbot.init({
            tocSelector: '#article-toc',
            contentSelector: '#article-content',
            headingSelector: 'h2',
            headingsOffset: 60,
            scrollSmoothOffset: -60,
        })
        return () => tocbot.destroy()
    }, [])

    return null
}

export default function ProjectLayout({children, meta}: { children: React.ReactNode, meta: LayoutMeta }) {
    return (
        <MainLayout meta={meta}>
            <div className={styles.container}>
                <article id="article-content" className={styles.article}>{children}</article>
                <aside id="article-toc" className={styles.toc}/>
                <ClientTOC/>
            </div>
        </MainLayout>
    )
}