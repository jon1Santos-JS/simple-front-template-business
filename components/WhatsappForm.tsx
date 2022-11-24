import { createRef } from 'react';
import WhatsappIcon from '../public/images/whatsapp-icon-svg.svg';
import Image from 'next/image';

export default function WhatsappForm() {
    const textMessage = createRef();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
            className="c-form c-contact-form c-whatsapp-form l-bg-primary"
        >
            <div className="c-contact-label l-font-primary-white">
                <Image
                    src={WhatsappIcon}
                    width={42}
                    height={42}
                    alt="scont logo"
                />
                <span className="c-label-text">Whatsapp</span>
            </div>
            <input
                id="name"
                className="c-form-element"
                type="text"
                name="name"
                placeholder="Nome"
            />
            <textarea
                id="message"
                className="c-form-element"
                name="message"
                placeholder="Mensagem"
                ref={textMessage && null}
            />
            <button
                className="c-form-element l-button l-secondary-button"
                type="submit"
            >
                Enviar
            </button>
        </form>
    );
}
