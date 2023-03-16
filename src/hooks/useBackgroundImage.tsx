import Image from 'next/image';

interface BackgroundImageProps {
    backgroundClassName: string;
}

export default function BackgroundImage({
    backgroundClassName,
}: BackgroundImageProps) {
    return (
        <>
            <Image
                className={`c-background-image ${backgroundClassName}`}
                src="/images/scont-404-page-svg.svg"
                style={{
                    objectFit: 'cover',
                }}
                fill={true}
                priority={true}
                alt={'Plano de fundo de página não encontrada'}
            />
        </>
    );
}
