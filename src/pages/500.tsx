export default function PageError500() {
    return (
        <div className="o-error-page l-bg-error">
            <div className="o-500 l-font-primary-white">
                <span className="title">Internal Server Error 500</span>
                <span className="paragraph">
                    The server encountered an internal error or misconfiguration
                    and was unable to complete your request
                </span>
            </div>
        </div>
    );
}
