import type { NextPage } from 'next';
import Head from 'next/head';
import BlogElement from '../components/BlogPage/BlogElement';

import FooterSection from '../components/FooterSection/FooterSection';

const Blog: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Scont Blog</title>
                <meta
                    name="Scont Contabilidade Blog Page"
                    content="Entender um pouco mais sobre processos relacionados a contabilidade e administração de empresas"
                />
                <link rel="icon" href="/favicon-scont.ico" />
            </Head>
            <section className="o-blog-page l-bg-primary-white">
                <section className="o-blog-container">
                    <BlogElement />
                </section>
                <FooterSection />
            </section>
        </div>
    );
};

export default Blog;
