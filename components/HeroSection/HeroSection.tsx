import Image from 'next/image';
import HeroSectionContainer from '../../components/HeroSection/HeroSectionContainer/HeroSectionContainer';

export default function HeroSection() {
    return (
        <section className="o-hero-section">
            <HeroSectionContainer />
            <Image
                src="/images/desktop-hero-image-raw-svg.svg"
                style={{
                    objectFit: 'cover',
                }}
                fill={true}
                priority={true}
                alt={'Scont contabilidade hero image'}
            />
        </section>
    );
}
