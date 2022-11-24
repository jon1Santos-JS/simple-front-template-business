import Image from 'next/image';

interface ThanksEmailModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ThanksEmailModal({
    isOpen,
    onClose,
}: ThanksEmailModalProps) {
    return (
        <div
            className={`c-thanks-close-modal ${isOpen ? 'is-closed' : ''}`}
            onClick={() => {
                onClose();
            }}
        >
            <aside
                className="c-thanks-email-modal l-bg-primary-light"
                onClick={(e) => e.stopPropagation()}
            >
                <section className="c-thanks-text">
                    <h3 className="c-thanks-title l-font-primary-white">
                        Recebemos sua mensagem.
                    </h3>
                    <p className="c-thanks-paragraph l-font-secondary-water">
                        A Scont agradece pelo seu interesse, é só aguardar que,
                        em breve, entraremos em contato com você.
                    </p>
                </section>
                <Image
                    className="c-close-icon l-icon-primary-white"
                    src="/images/close-icon.svg"
                    priority={true}
                    alt={'Icone de alerta de envio concluído'}
                    width={50}
                    height={50}
                    onClick={() => onClose()}
                />
                <Image
                    className="c-check-icon l-icon-primary-white"
                    src="/images/check-icon.svg"
                    priority={true}
                    alt={'Icone de alerta de envio concluído'}
                    width={50}
                    height={50}
                />
            </aside>
        </div>
    );
}
