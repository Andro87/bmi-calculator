import styles from "./Suggestion.module.scss";
import { ReactNode } from "react";

interface Props {
    readonly icon: ReactNode;
    readonly header: string;
    readonly paragraph: string;
}

export const Suggestion: React.FunctionComponent<Props> = props => {
    const { icon, header, paragraph } = props;
    return (
        <div className={styles.container}>
            {icon}
            <div className={styles.wrap}>
                <h3>{header}</h3>
                <p>{paragraph}</p>
            </div>
        </div>
    );
};
