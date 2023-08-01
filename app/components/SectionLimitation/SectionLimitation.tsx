import styles from "./SectionLimitation.module.scss";

import { limitations } from "@/data/limitations";

import { Limitation } from "./Limitation/Limitation";

export const SectionLimitation = () => {
    const allLimitations = limitations.map((limitation, index) => {
        return (
            <Limitation
                key={index}
                icon={limitation.icon}
                header={limitation.header}
                paragraph={limitation.paragraph}
                position={limitation.area}
            />
        );
    });
    return (
        <section
            aria-label="limitations"
            className={styles.section_limitations}
        >
            <div className={styles.limitations_container}>
                <div className={styles.limitations_intro}>
                    <h2>Limitations of BMI</h2>
                    <p>
                        Although BMI is often a practical indicator of healthy
                        weight, it is not suited for every person. Specific
                        groups should carefully consider their BMI outcomes, and
                        in certain cases, the measurement may not be beneficial
                        to use.
                    </p>
                </div>
                <div className={styles.limitations}>{allLimitations}</div>
            </div>
        </section>
    );
};
