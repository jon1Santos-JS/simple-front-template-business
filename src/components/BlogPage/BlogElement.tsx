import Image from 'next/image';
import Link from 'next/link';

export default function BlogElement() {
    return (
        <Link className="c-blog-element" href="">
            <Image
                className="c-image"
                src="/images/imposto-de-renda-background-image-svg.svg"
                style={{
                    objectFit: 'cover',
                }}
                fill={true}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                priority={true}
                alt={'imagem de fundo do botão de "como abrir uma empresa?"'}
            />
            <h2 className="c-text l-font-primary-white">
                how to open a business?
            </h2>
            <div className="c-bg-gradient"></div>
        </Link>
    );
}
