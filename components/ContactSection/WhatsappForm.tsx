import { FormEvent, useState } from 'react';
import WhatsappIcon from '../../public/images/whatsapp-icon-svg.svg';
import Image from 'next/image';

export default function WhatsappForm() {
    const [textMessage, setTextMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [isFirstCheck, setisFirstCheck] = useState(false);

    const onFirstCheck = (value: string) => {
        if (isFirstCheck) return value;
    };

    const onSubmitFunction = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setisFirstCheck(true);

        if (userName && textMessage) {
            window.open(
                `https://wa.me/91197215?text=[${userName}]%20${textMessage}`,
                '_blank',
            );
        }
    };

    return (
        <form
            onSubmit={onSubmitFunction}
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
                className={`c-form-element l-bg-gray ${onFirstCheck(
                    userName ? '' : 'has-empty-value',
                )}`}
                type="text"
                name="name"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Nome"
                maxLength={40}
            />
            <textarea
                id="message"
                className={`c-form-element l-bg-gray ${onFirstCheck(
                    textMessage ? '' : 'has-empty-value',
                )}`}
                onChange={(e) => setTextMessage(e.target.value)}
                name="message"
                placeholder="Mensagem"
                maxLength={255}
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
