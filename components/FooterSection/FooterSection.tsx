import InstagramIcon from '../../public/images/instagram-icon.svg';
import LinkedinIcon from '../../public/images/linkedin-icon.svg';
import FacebookIcon from '../../public/images/facebook-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

export default function FooterContainer() {
    return (
        <footer className="o-footer-section l-bg-primary">
            <div className="c-footer-container l-font-secondary-water">
                <div className="c-container-adresss">
                    <span className="c-title l-font-primary-white">
                        Palhoça SC
                    </span>
                    <span>Rua Monza 226 Sala 601 </span>
                    <span>Passa Vinte</span>
                    <Link
                        className="l-primary-navigation-white-button"
                        href="https://www.google.com.br/maps/place/R.+Moza,+226+-+Pagani,+Palho%C3%A7a+-+SC,+88132-147/@-27.6408778,-48.6754585,17z/data=!3m1!4b1!4m5!3m4!1s0x95273509d235a1c7:0x745fb88fb05d81f5!8m2!3d-27.6408778!4d-48.6754585?hl=pt-BR"
                        target="blank"
                    >
                        Como chegar
                    </Link>
                </div>
                <div className="c-container-icons l-font-primary-white">
                    <Image
                        src={InstagramIcon}
                        width={42}
                        height={42}
                        alt="ícone do instagram"
                    />
                    <Image
                        className="c-linkedin-icon"
                        src={LinkedinIcon}
                        width={42}
                        height={42}
                        alt="ícone do linkedin"
                    />
                    <Image
                        src={FacebookIcon}
                        width={42}
                        height={42}
                        alt="ícone do facebook"
                    />
                </div>
            </div>
        </footer>
    );
}
