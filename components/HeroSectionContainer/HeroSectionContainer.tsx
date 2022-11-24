import CheckSentence from './CheckSentence';

export default function HeroSectionContainer() {
    return (
        <section className="c-hero-section-container l-font-primary-white">
            <h1 className="c-container-tittle">Scont Contabilidade</h1>
            <div className="c-content">
                <h4 className="c-list-title">Sua empresa</h4>
                <div className="c-list">
                    <CheckSentence sentence="aberta" />
                    <CheckSentence sentence="regularizada" />
                    <CheckSentence sentence="e pagando o mínimo de impostos" />
                </div>
            </div>
        </section>
    );
}
