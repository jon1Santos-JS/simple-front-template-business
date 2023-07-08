import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import BlogElement from '../components/BlogPage/BlogElement';

import FooterSection from '../components/FooterSection/FooterSection';

const Blog: NextPage = () => {
    useEffect(() => {
        window.scrollBy(window.scrollX, window.scrollY);
        window.scrollTo(0, 0);
        if (window.location.hash.includes('#')) window.location.assign('/');
    }, []);

    return (
        <div>
            <Head>
                <title>Blog page</title>
                <meta
                    name="Company's blog page"
                    content="To share information and understanding some topics"
                />
                <link rel="icon" href="data:,"></link>
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
