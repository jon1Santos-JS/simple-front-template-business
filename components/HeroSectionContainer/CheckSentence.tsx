import Image from 'next/image';

interface CheckSentenceProps {
    sentence: string;
}

export default function CheckSentence({ sentence }: CheckSentenceProps) {
    return (
        <div className="c-list-item">
            <Image
                className="c-container-check-icon l-icon-secondary-water"
                src="/images/check-icon.svg"
                priority={true}
                alt={'Icone de ok para sentenças'}
                width={50}
                height={50}
            />
            <span className="l-font-secondary-water">{sentence}</span>
        </div>
    );
}
