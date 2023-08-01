import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <a href="/">
                <img src="/images/logo.svg" alt="logo" />
            </a>
        </header>
    );
};
