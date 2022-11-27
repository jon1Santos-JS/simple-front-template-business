import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import FooterSection from '../components/FooterSection/FooterSection';
import HeroSection from '../components/HeroSection/HeroSection';
import ThanksEmailModal from '../components/ContactSection/ThanksEmailModal';
import AboutSection from '../components/AboutSection/AboutSection';

const Home: NextPage = () => {
    const [displayModal, setDisplayModal] = useState<boolean>(true);
    function onModalOpen() {
        setDisplayModal(false);
    }

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
            <section className="o-home-page">
                <ThanksEmailModal
                    onClose={() => setDisplayModal(true)}
                    isOpen={displayModal}
                />
                <HeroSection />
                <AboutSection />
                <ContactSection openModal={onModalOpen} />
                <FooterSection />
            </section>
        </div>
    );
};

export default Home;
