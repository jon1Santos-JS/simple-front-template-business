import useBackgroundImage from '../hooks/useBackgroundImage';

export default function Page404() {
    const BackgroundImage = useBackgroundImage({ backgroundClassName: '' });

    return (
        <div className="o-404-page">
            {BackgroundImage}
            <div className="o-sentence l-font-primary-white">
                <span className="o-404">404</span>
                <span className="o-not-found">
                    This page could not be found.
                </span>
            </div>
        </div>
    );
}
