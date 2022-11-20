// https://wa.me/91336290?text=oi

export default function WhatsappForm() {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                window.open('https://wa.me/91336290?text=oi');
            }}
            className="c-whatsapp-form"
        >
            <label htmlFor="number">Número</label>
            <input id="number" type="text" name="number" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
            <button type="submit">Submit</button>
        </form>
    );
}
