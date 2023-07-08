import type { AppProps } from 'next/app';
import '../styles/sass/index.scss';
import { Montserrat } from '@next/font/google';
import NavigationBar from '../components/NavigationBar';
import NextNProgress from 'nextjs-progressbar';
import { useRouter } from 'next/router';

const montserrat = Montserrat();

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const displayTopNavigationBar = router.asPath !== '/404' || router.asPath !== '/500' ? (
        <NavigationBar navigationClassName="c-navigation c-top-navigation l-bg-primary-white l-light-shadow" />
    ) : null;
    const displayBottomNavigationBar = router.asPath !== '/404' || router.asPath !== '/500' ? (
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
