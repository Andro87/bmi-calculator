import {
    Header,
    Main,
    FormCalculator,
    SectionMeaning,
    SectionLimitation
} from "./components";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <div className={styles.home_container}>
            <Header />
            <Main />
            <SectionMeaning />
            <SectionLimitation />
        </div>
    );
}
