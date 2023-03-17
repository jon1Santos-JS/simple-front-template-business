import Link from 'next/link';
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
            <Link
                className="c-navigation-logo"
                href={checkUsersPage('#contact')}
            >
                LOGO
            </Link>
            <div className="c-navigation-routes">
                <Link
                    className="l-primary-navigation-button"
                    href={checkUsersPage('#contact')}
                >
                    Contact
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
