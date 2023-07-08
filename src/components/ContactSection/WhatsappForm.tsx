import { FormEvent, useState } from 'react';
import WhatsappIcon from '../../../public/images/whatsapp-icon-svg.svg';
import Image from 'next/image';
import useInputCheck from '../../hooks/useInputCheck';

export type whatsappPhone = string;

interface whatsappFormProps {
    number: whatsappPhone;
}

export default function WhatsappForm(props: whatsappFormProps) {
    const [textMessage, setTextMessage] = useState('');
    const [userName, setUserName] = useState('');
    const { changeInputState, onCheckInputLength, setFirstCheck } =
        useInputCheck();

    const onSubmitFunction = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (userName && textMessage) {
            setTextMessage('');
            setUserName('');
            window.open(
                `https://wa.me/${props.number}?text=[${userName}]%20${textMessage}`,
                'blank',
            );
            window.location.reload();
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
                className={`c-form-element l-bg-gray ${changeInputState(
                    userName,
                )}`}
                type="text"
                name="name"
                value={userName}
                onChange={(e) =>
                    onCheckInputLength(e.target.value, 40, setUserName)
                }
                placeholder="Name"
                maxLength={40}
            />
            <textarea
                id="message"
                className={`c-form-element l-bg-gray ${changeInputState(
                    textMessage,
                )}`}
                value={textMessage}
                onChange={(e) =>
                    onCheckInputLength(e.target.value, 255, setTextMessage)
                }
                name="message"
                placeholder="Message"
                maxLength={255}
            />
            <button
                className="c-form-element l-button l-secondary-button"
                type="submit"
                onClick={() => setFirstCheck(false)}
            >
                Submit
            </button>
        </form>
    );
}
