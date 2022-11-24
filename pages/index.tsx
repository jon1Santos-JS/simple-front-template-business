import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import EmailForm from '../components/EmailForm';
import HeroSectionContainer from '../components/HeroSectionContainer/HeroSectionContainer';
import ThanksEmailModal from '../components/ThanksEmailModal';
import WhatsappForm from '../components/WhatsappForm';

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
                <section className="o-hero-section">
                    <HeroSectionContainer />
                    <Image
                        src="/images/desktop-hero-image-raw-svg.svg"
                        style={{
                            objectFit: 'cover',
                        }}
                        fill={true}
                        priority={true}
                        alt={'Scont contabilidade hero image'}
                    />
                </section>
                <section id="contact" className="o-contact-section">
                    <WhatsappForm />
                    <EmailForm openThanksModal={onModalOpen} />
                </section>
                <footer className="o-footer-section l-bg-primary"></footer>
            </section>
        </div>
    );
};

export default Home;
