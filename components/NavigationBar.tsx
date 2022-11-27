import Link from 'next/link';
import ScontLogo from '../public/images/logo-svg.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface NavigationProps {
    navigationClassName: string;
}

export default function NavigationBar({
    navigationClassName,
}: NavigationProps) {
    const [isUserOnMainPage, setisUserOnMainPage] = useState('');

    useEffect(() => {
        setisUserOnMainPage(window.location.pathname);
        if (isUserOnMainPage !== '/')
            setisUserOnMainPage(window.location.origin);
    }, [isUserOnMainPage]);

    function checkUsersPage(path: string) {
        return isUserOnMainPage === '/' ? path : isUserOnMainPage + '/' + path;
    }

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
                <Link
                    className="l-primary-navigation-button"
                    href={checkUsersPage('#contact')}
                >
                    Contato
                </Link>
                <Link
                    className="l-primary-navigation-button"
                    href={checkUsersPage('#about')}
                >
                    About
                </Link>
                <Link className="l-primary-navigation-button" href="/blog">
                    Blog
                </Link>
            </div>
        </div>
    );
}
