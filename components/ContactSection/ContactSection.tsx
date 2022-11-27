import EmailForm from './EmailForm';
import WhatsappForm from './WhatsappForm';

interface ContactSectionProps {
    openModal: () => void;
}

export default function ContactSection({ openModal }: ContactSectionProps) {
    return (
        <>
            <div
                id="contact"
                className="c-contact-section-difference-divider"
            ></div>
            <section className="o-contact-section l-bg-primary-white">
                <div className="c-contact-container">
                    <h2 className="c-title l-font-primary">
                        Precisando abrir empresa ou migrar de contabilidade?
                    </h2>
                    <WhatsappForm />
                    <EmailForm openThanksModal={openModal} />
                </div>
            </section>
        </>
    );
}
