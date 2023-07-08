import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import FooterSection from '../components/FooterSection/FooterSection';
import HeroSection from '../components/HeroSection/HeroSection';
import ThanksEmailModal from '../components/ContactSection/ThanksEmailModal';
import AboutSection from '../components/AboutSection/AboutSection';

interface HomeProps {
    number: string;
    formspreeKey: string;
}

export function getStaticProps() {
    return {
        props: {
            number: process.env.PHONE_NUMBER,
            formspreeKey: process.env.FORMSPREE_KEY,
        },
    };
}

const Home: NextPage<HomeProps> = ({ number, formspreeKey }) => {
    const [displayModal, setDisplayModal] = useState<boolean>(true);
    function onModalOpen() {
        setDisplayModal(false);
    }

    return (
        <div>
            <Head>
                <title>Company</title>
                <meta
                    name="Company homepage"
                    content="To contact, and first impressions"
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
                <ContactSection
                    whatsPhone={number}
                    formspreeKey={formspreeKey}
                    openModal={onModalOpen}
                />
                <FooterSection />
            </section>
        </div>
    );
};

export default Home;
