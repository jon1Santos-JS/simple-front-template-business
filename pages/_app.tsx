import type { AppProps } from 'next/app';
import '../styles/sass/index.scss';
import { Montserrat } from '@next/font/google';
import NavigationBar from '../components/NavigationBar';
import NextNProgress from 'nextjs-progressbar';
import Page404 from '../components/404page';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const montserrat = Montserrat();

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, -10);
        if (window.location.hash.includes('#')) router.push('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (typeof pageProps.statusCode !== 'undefined') {
        return (
            <main className={montserrat.className}>
                <Page404 />
            </main>
        );
    }

    return (
        <main className={montserrat.className}>
            <NextNProgress
                options={{ easing: 'ease', speed: 300 }}
                height={4}
                showOnShallow={true}
            />
            <NavigationBar navigationClassName="c-navigation c-top-navigation l-bg-primary-white l-light-shadow" />
            <Component {...pageProps} />
            <NavigationBar navigationClassName="c-navigation c-bottom-navigation l-bg-primary-white" />
        </main>
    );
}
