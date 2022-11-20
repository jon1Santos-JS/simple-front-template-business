import type { AppProps } from 'next/app';
import '../styles/sass/index.scss';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat();

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className={montserrat.className}>
            <Component {...pageProps} />
        </main>
    );
}
