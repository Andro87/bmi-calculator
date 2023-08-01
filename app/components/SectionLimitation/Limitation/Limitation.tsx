import styles from "./Limitation.module.scss";
import { ReactNode } from "react";

interface Props {
    readonly icon: ReactNode;
    readonly header: string;
    readonly paragraph: string;
    readonly position: string;
}

export const Limitation: React.FunctionComponent<Props> = props => {
    const { icon, header, paragraph, position } = props;
    return (
        <div className={`${styles.limitation} ${styles[position]}`}>
            <div className={styles.limitation_wrap}>
                {icon}
                <h3>{header}</h3>
            </div>

            <p>{paragraph}</p>
        </div>
    );
};
