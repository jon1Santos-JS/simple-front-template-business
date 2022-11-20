import type { NextPage } from 'next';
import Head from 'next/head';
import NavigationBar from '../components/NavigationBar';
import Image from 'next/image';
import EmailForm from '../components/EmailForm';
import WhatsappForm from '../components/WhatsappForm';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Scont Contabilidade</title>
                <meta
                    name="Scont Contabilidade homepage"
                    content="Entrar em contato com a scont, e conhecer um pouco mais sobre a empresa"
                />
                <link rel="icon" href="/favicon-scont.ico" />
            </Head>
            <NavigationBar />
            <section className="o-home-page">
                <section className="o-hero-section">
                    <h1 className="c-hero-section-tittle">
                        Scont Contabilidade
                    </h1>
                    <Image
                        src="/images/desktop-hero-image-raw-svg.svg"
                        style={{
                            objectFit: 'cover',
                        }}
                        fill={true}
                        alt={'Scont contabilidade hero image'}
                    />
                </section>
                <section className="o-contact-section">
                    <EmailForm />
                    <WhatsappForm />
                </section>
                <footer className="o-footer-section"></footer>
            </section>
        </div>
    );
};

export default Home;
