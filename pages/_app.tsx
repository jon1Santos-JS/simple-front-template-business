import type { AppProps } from 'next/app';
import '../styles/sass/index.scss';
import { Montserrat } from '@next/font/google';
import NavigationBar from '../components/NavigationBar';
import NextNProgress from 'nextjs-progressbar';
import Page404 from '../components/404page';

const montserrat = Montserrat();

export default function MyApp({ Component, pageProps }: AppProps) {
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
