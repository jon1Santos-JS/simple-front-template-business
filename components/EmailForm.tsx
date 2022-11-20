import { useForm, ValidationError } from '@formspree/react';

export default function EmailForm() {
    const [state, handleSubmit] = useForm('mzbwwdlv');
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="c-email-form">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}
