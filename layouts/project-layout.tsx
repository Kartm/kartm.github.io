import {useEffect} from "react";
import tocbot from "tocbot";
import MainLayout, {LayoutMeta} from "./main-layout";
import styles from '../styles/project-layout.module.css'

function ClientTOC() {
    useEffect(() => {
        tocbot.init({
            tocSelector: '.js-toc',
            contentSelector: '#article-content',
            headingSelector: 'h1',
            activeLinkClass: styles.activeLink,
            activeListItemClass: styles.activeLi,
            extraLinkClasses: styles.link,
            headingsOffset: 60,
            scrollSmooth: false,
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
                <aside id="article-toc" className={styles.toc}>
                    <h5 id="toc-title" className="toc-title">In this post:</h5>
                    <nav className="js-toc" role="navigation"></nav>
                </aside>
                <ClientTOC/>
            </div>
        </MainLayout>
    )
}