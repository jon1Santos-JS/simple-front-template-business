import { useForm, ValidationError } from '@formspree/react';
import { FormEvent, useEffect, useState } from 'react';
import EmailIcon from '../../../public/images/email-icon-svg.svg';
import Image from 'next/image';
import useInputCheck from '../../hooks/useInputCheck';

export type formspreeKey = string | undefined;

interface EmailFormProps {
    openThanksModal: () => void;
    formspreeKey: formspreeKey;
}

export default function EmailForm({
    openThanksModal,
    formspreeKey,
}: EmailFormProps) {
    const [state, handleSubmit] = useForm(formspreeKey as string);
    const [focus, setFocus] = useState(false);
    const [turnOffState, setTurnOffState] = useState('');
    const [emailValue, setEmailvalue] = useState('');
    const [textValue, setTextValue] = useState('');
    const { changeInputState, onCheckInputLength, setFirstCheck } =
        useInputCheck();

    useEffect(() => {
        onInputState();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.succeeded]);

    function onInputState() {
        if (state.succeeded) {
            setEmailvalue('');
            setTextValue('');
            setTurnOffState('off');
            setTimeout(() => openThanksModal(), 500);
        }
    }

    function onCheckSubmit() {
        if (emailValue === '' || textValue === '') {
            return (e: FormEvent<HTMLFormElement>) => e.preventDefault();
        }
        return handleSubmit;
    }

    return (
        <form
            onSubmit={onCheckSubmit()}
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
                className={`c-form-element l-bg-gray ${changeInputState(
                    turnOffState ? turnOffState : emailValue,
                )}`}
                type="email"
                name="email"
                placeholder="Email"
                value={emailValue}
                maxLength={40}
                onChange={(e) =>
                    onCheckInputLength(e.target.value, 40, setEmailvalue)
                }
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
                className={`c-form-element l-bg-gray ${changeInputState(
                    turnOffState ? turnOffState : textValue,
                )}`}
                name="message"
                placeholder="Message"
                value={textValue}
                maxLength={255}
                onChange={(e) =>
                    onCheckInputLength(e.target.value, 255, setTextValue)
                }
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
                    turnOffState ? 'l-bg-gray' : ' l-primary-button'
                }`}
                type="submit"
                disabled={state.submitting}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onClick={() => setFirstCheck(false)}
            >
                Submit
            </button>
        </form>
    );
}
