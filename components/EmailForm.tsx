import { useForm, ValidationError } from '@formspree/react';
import { FormEvent, useEffect, useState } from 'react';
import EmailIcon from '../public/images/email-icon-svg.svg';
import Image from 'next/image';

interface EmailFormProps {
    openThanksModal: () => void;
}

export default function EmailForm({ openThanksModal }: EmailFormProps) {
    const [state, handleSubmit] = useForm('mnqrynyo');
    const [focus, setFocus] = useState(false);
    const [disableForm, setDisableForm] = useState(false);
    const [emailValue, setEmailvalue] = useState('');
    const [textValue, setTextValue] = useState('');

    useEffect(() => {
        if (state.succeeded) {
            setEmailvalue('');
            setTextValue('');
            setDisableForm(true);
            setTimeout(() => openThanksModal(), 700);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.succeeded]);

    function disableSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <form
            onSubmit={disableForm ? disableSubmit : handleSubmit}
            className={`c-form c-contact-form c-email-form l-bg-primary-white ${
                focus ? 'has-focus' : ''
            }`}
        >
            <div className="c-contact-label l-font-primary">
                <Image
                    src={EmailIcon}
                    width={42}
                    height={42}
                    alt="scont logo"
                />
                <span className="c-label-text">Email</span>
            </div>
            <input
                id="email"
                className="c-form-element"
                type="email"
                name="email"
                placeholder="Email"
                value={emailValue}
                onChange={(e) => setEmailvalue(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                className="c-form-element"
                name="message"
                placeholder="Mensagem"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button
                className={`c-form-element l-button ${
                    disableForm ? 'l-button-disable' : ' l-primary-button'
                }`}
                type="submit"
                disabled={state.submitting}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            >
                Enviar
            </button>
        </form>
    );
}
