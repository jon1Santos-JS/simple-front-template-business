import Link from 'next/link';
import ScontLogo from '../public/images/logo-svg.svg';
import Image from 'next/image';

export default function NavigationBar() {
    return (
        <div className="o-main-navigation-bar">
            <Link href="/">
                <Image
                    src={ScontLogo}
                    width={42}
                    height={42}
                    alt="scont logo"
                />
            </Link>
            <Link href="/blog">Blog</Link>
        </div>
    );
}
