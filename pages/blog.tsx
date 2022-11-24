import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

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
            <section className="o-blog-page">
                <section className="o-blog-container">
                    <section className="c-blog-element">
                        <Image
                            src="/images/imposto-de-renda-background-image-svg.svg"
                            style={{
                                objectFit: 'cover',
                            }}
                            fill={true}
                            priority={true}
                            alt={'Imposto de renda imagem'}
                        />
                    </section>
                </section>
                <footer className="o-footer-section"></footer>
            </section>
        </div>
    );
};

export default Blog;
