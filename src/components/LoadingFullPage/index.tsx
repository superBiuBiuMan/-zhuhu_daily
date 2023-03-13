import classes from "./index.module.less";

const LoadingFullPage = () => {

    return (
        <div className={classes.loading} >
            <div className={classes.loading_test}  aria-hidden="true"></div>
            <p className="loading-text" aria-label="Loading">
                <span className="letter" aria-hidden="true">L</span>
                <span className="letter" aria-hidden="true">o</span>
                <span className="letter" aria-hidden="true">a</span>
                <span className="letter" aria-hidden="true">d</span>
                <span className="letter" aria-hidden="true">i</span>
                <span className="letter" aria-hidden="true">n</span>
                <span className="letter" aria-hidden="true">g</span>
            </p>
        </div>
    )
}

export default LoadingFullPage;
