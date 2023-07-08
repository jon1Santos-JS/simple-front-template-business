import type { AppProps } from 'next/app';
import '../styles/sass/index.scss';
import { Montserrat } from '@next/font/google';
import NavigationBar from '../components/NavigationBar';
import NextNProgress from 'nextjs-progressbar';

const montserrat = Montserrat();

export default function MyApp({ Component, pageProps }: AppProps) {
    return <main className={montserrat.className}>{renderContent()}</main>;
    function renderContent() {
        if (pageProps.statusCode === 404 || pageProps.statusCode === 500)
            return <Component {...pageProps} />;

        return (
            <>
                <NextNProgress
                    options={{ easing: 'ease', speed: 300 }}
                    height={4}
                    showOnShallow={true}
                />
                <NavigationBar navigationClassName="c-navigation c-top-navigation l-bg-primary-white l-light-shadow" />
                <Component {...pageProps} />
                <NavigationBar navigationClassName="c-navigation c-bottom-navigation l-bg-primary-white" />
            </>
        );
    }
}
