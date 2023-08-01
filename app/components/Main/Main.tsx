import styles from "./Main.module.scss";

import { FormCalculator } from "../FormCalculator/FormCalculator";

export const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main_container}>
                <div className={styles.main_intro}>
                    <h1>Body Mass Index Calculator</h1>
                    <p>
                        Better understand your weight in relation to your height
                        using our body mass index (BM) calculator. While BMI is
                        not the sole determinant of a healthy weight, it offers
                        a valuable starting point to evaluate your overall
                        health and well-being.
                    </p>
                </div>
                <div className={styles.main_form}>
                    <FormCalculator />
                </div>
            </div>
        </main>
    );
};
