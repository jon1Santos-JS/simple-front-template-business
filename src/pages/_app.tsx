import type { AppProps } from 'next/app';
import '../styles/sass/index.scss';
import { Montserrat } from '@next/font/google';
import NavigationBar from '../components/NavigationBar';
import NextNProgress from 'nextjs-progressbar';

const montserrat = Montserrat();

export default function MyApp({ Component, pageProps }: AppProps) {
    const displayTopNavigationBar =
        Component.name !== 'Page404' ? (
            <NavigationBar navigationClassName="c-navigation c-top-navigation l-bg-primary-white l-light-shadow" />
        ) : null;
    const displayBottomNavigationBar =
        Component.name !== 'Page404' ? (
            <NavigationBar navigationClassName="c-navigation c-bottom-navigation l-bg-primary-white" />
        ) : null;

    return (
        <main className={montserrat.className}>
            <NextNProgress
                options={{ easing: 'ease', speed: 300 }}
                height={4}
                showOnShallow={true}
            />
            {displayTopNavigationBar}
            <Component {...pageProps} />
            {displayBottomNavigationBar}
        </main>
    );
}
