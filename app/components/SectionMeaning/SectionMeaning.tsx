import styles from "./SectionMeaning.module.scss";

import { suggestions } from "@/data/suggestions";

import { Suggestion } from "./Suggestion/Suggestion";

export const SectionMeaning = () => {
    const allSuggestions = suggestions.map((suggestion, index) => {
        return (
            <Suggestion
                key={index}
                icon={suggestion.icon}
                header={suggestion.header}
                paragraph={suggestion.paragraph}
            />
        );
    });

    return (
        <section aria-label="result meaning" className={styles.section_meaning}>
            <div className={styles.meaning_intro}>
                <div className={styles.meaning_intro_container}>
                    <div className={styles.meaning_img_container}>
                        <img alt="" src="./images/image-man-eating.webp" />
                    </div>

                    <div className={styles.meaning_info_container}>
                        <h2>What your BMI result means</h2>
                        <p>
                            A BMI range of 18.5 to 24.9 is considered a
                            &apos;healthy weight. &apos; Maintaining a healthy
                            weight may lower your chances of experiencing health
                            issues later on, such as obesity and type 2
                            diabetes. Aim for a nutritious diet with reduced fat
                            and sugar content, incorporating ample fruits and
                            vegetables. Additionally, strive for regular
                            physical activity, ideally about 30 minutes daily
                            for five days a week.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.meaning_suggestions}>
                <div className={styles.suggestions_container}>
                    {allSuggestions}
                </div>
            </div>
        </section>
    );
};
