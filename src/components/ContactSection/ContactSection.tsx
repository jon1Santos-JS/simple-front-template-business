import EmailForm, { formspreeKey } from './EmailForm';
import WhatsappForm, { whatsappPhone } from './WhatsappForm';

interface ContactSectionProps {
    openModal: () => void;
    whatsPhone: whatsappPhone;
    formspreeKey: formspreeKey;
}

export default function ContactSection({
    openModal,
    whatsPhone,
    formspreeKey,
}: ContactSectionProps) {
    return (
        <>
            <div
                id="contact"
                className="c-contact-section-difference-divider"
            ></div>
            <section className="o-contact-section l-bg-primary-white">
                <div className="c-contact-container">
                    <h2 className="c-title l-font-primary">
                        Ipsum has been the industrys standard dummy
                    </h2>
                    <WhatsappForm number={whatsPhone} />
                    <EmailForm
                        formspreeKey={formspreeKey}
                        openThanksModal={openModal}
                    />
                </div>
            </section>
        </>
    );
}
