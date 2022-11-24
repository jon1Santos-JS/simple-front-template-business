import Link from 'next/link';
import ScontLogo from '../public/images/logo-svg.svg';
import Image from 'next/image';

interface NavigationProps {
    navigationClassName: string;
}

export default function NavigationBar({
    navigationClassName,
}: NavigationProps) {
    return (
        <div className={navigationClassName}>
            <Link href="/">
                <Image
                    src={ScontLogo}
                    width={42}
                    height={42}
                    alt="scont logo"
                    className="c-navigation-logo"
                />
            </Link>
            <div className="c-navigation-routes">
                <a className="l-primary-navigation-button" href="#contact">
                    Contato
                </a>
                <Link className="l-primary-navigation-button" href="/blog">
                    Blog
                </Link>
            </div>
        </div>
    );
}
