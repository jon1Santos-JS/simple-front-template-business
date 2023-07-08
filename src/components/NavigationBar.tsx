import Link from 'next/link';
import { useState } from 'react';

interface NavigationProps {
    navigationClassName: string;
}

export default function NavigationBar({
    navigationClassName,
}: NavigationProps) {
    const [isUserOnMainPage, setisUserOnMainPage] = useState('');

    function checkUersPage() {
        if (window.location.pathname !== window.location.origin)
            setisUserOnMainPage(window.location.origin);
    }

    return (
        <div className={navigationClassName}>
            <Link className="c-navigation-logo" href={'/'}>
                LOGO
            </Link>
            <div className="c-navigation-routes">
                <Link
                    className="l-primary-navigation-button"
                    href={isUserOnMainPage + '/#contact'}
                    onClick={() => checkUersPage()}
                >
                    Contact
                </Link>
                <Link
                    className="l-primary-navigation-button"
                    href={isUserOnMainPage + '/#about'}
                    onClick={() => checkUersPage()}
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
