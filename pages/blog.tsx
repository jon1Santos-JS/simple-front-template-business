import type { NextPage } from 'next';
import Head from 'next/head';
import NavigationBar from '../components/NavigationBar';

const Blog: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Scont Contabilidade</title>
                <meta
                    name="Scont Contabilidade Blog Page"
                    content="Entender um pouco mais sobre processos relacionados a contabilidade e administração de empresas"
                />
                <link rel="icon" href="/favicon-scont.ico" />
            </Head>
            <NavigationBar />
            <section className="o-blog-page">
                <section className="o-blog-content"></section>
                <footer className="o-footer-section"></footer>
            </section>
        </div>
    );
};

export default Blog;
