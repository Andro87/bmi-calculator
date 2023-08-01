import styles from "./InputBox.module.scss";

interface Props {
    readonly title?: string;
    readonly name: string;
    readonly value: string;
    readonly onChoice: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox: React.FunctionComponent<Props> = props => {
    const { title, name, value, onChoice } = props;

    return (
        <div className={styles.value_container}>
            <label htmlFor={name}>{title}</label>

            <div className={styles.input_container}>
                <input
                    type="number"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChoice}
                    placeholder="0"
                />
                <span>{name}</span>
            </div>
        </div>
    );
};
