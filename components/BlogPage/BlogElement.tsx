import Image from 'next/image';
import Link from 'next/link';

export default function BlogElement() {
    return (
        <Link
            className="c-blog-element"
            href="https://www.guiaempreendedor.com/guia/guia-passo-a-passo-para-tirar-o-cnpj-da-sua-empresa"
            target="blank"
        >
            <Image
                className="c-image"
                src="/images/imposto-de-renda-background-image-svg.svg"
                style={{
                    objectFit: 'cover',
                }}
                fill={true}
                priority={true}
                alt={'imagem de fundo do botão de "como abrir uma empresa?"'}
            />
            <h2 className="c-text l-font-primary-white">
                Como abrir uma empresa?
            </h2>
            <div className="c-bg-gradient"></div>
        </Link>
    );
}
