import CheckSentence from './CheckSentence';

export default function HeroSectionContainer() {
    return (
        <section className="c-hero-section-container l-font-primary-white">
            <h1 className="c-container-tittle">Accounting</h1>
            <div className="c-content">
                <h4 className="c-list-title l-font-secondary-water">
                    Your business
                </h4>
                <div className="c-list">
                    <CheckSentence sentence="opened" />
                    <CheckSentence sentence="regularized" />
                    <CheckSentence sentence="and paying the least amount of taxes" />
                </div>
            </div>
        </section>
    );
}
