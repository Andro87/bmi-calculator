"use client";

import { useEffect, useState } from "react";
import styles from "./FormCalcultor.module.scss";

import { InputBox } from "./InputBox/InputBox";

import {
    getBmiForMetric,
    getBmiForImperial,
    getMeterFromCentimeter,
    getTotalPounds,
    getTotalInches,
    getIdealWeightRangeMetric,
    getIdealWeightRangeImperial
} from "@/app/utils/util";

export const FormCalculator = () => {
    const [allData, setAllData] = useState({
        unit: "metric",
        cm: "",
        kg: "",
        ft: "",
        in: "",
        st: "",
        lbs: ""
    });

    const [bmi, setBmi] = useState(2);

    const [result, setResult] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setAllData(prevValues => {
            return {
                ...prevValues,
                [name]: value
            };
        });
    };

    const getBmi = () => {
        if (allData.unit === "metric") {
            const height = getMeterFromCentimeter(Number(allData.cm));

            const mass = Number(allData.kg);

            const metricResult =
                Math.round(getBmiForMetric(mass, height) * 10) / 10;

            setBmi(metricResult);
        }
        if (allData.unit === "imperial") {
            const totalPounds = getTotalPounds(
                Number(allData.st),
                Number(allData.lbs)
            );
            const totalInches = getTotalInches(
                Number(allData.ft),
                Number(allData.in)
            );

            const imperialResult =
                Math.round(getBmiForImperial(totalPounds, totalInches) * 10) /
                10;
            setBmi(imperialResult);
        }
    };

    const handleIndividualHealth = () => {
        if (bmi < 18.5) {
            setResult(" underweight");
        }
        if (bmi >= 18.5 && bmi <= 24.9) {
            setResult(" healthy weight");
        }
        if (bmi >= 25 && bmi <= 29.9) {
            setResult(" overweight");
        }
        if (bmi >= 30) {
            setResult(" obese");
        }
    };

    useEffect(() => {
        getBmi();
        handleIndividualHealth();
    }, [allData, bmi]);

    return (
        <form className={styles.form}>
            <h2>Enter your details below</h2>
            <div className={styles.form_units}>
                <div className={styles.unit_container}>
                    <input
                        id="metric"
                        type="radio"
                        name="unit"
                        value="metric"
                        checked={allData.unit === "metric"}
                        onChange={handleChange}
                    />
                    <label htmlFor="metric"> Metric </label>
                </div>
                <div className={styles.unit_container}>
                    <input
                        type="radio"
                        id="imperial"
                        name="unit"
                        value="imperial"
                        checked={allData.unit === "imperial"}
                        onChange={handleChange}
                    />
                    <label htmlFor="imperial">Imperial</label>
                </div>
            </div>
            <div className={styles.form_values}>
                {allData.unit === "metric" && (
                    <div className={styles.values_container}>
                        <InputBox
                            title="Height"
                            name="cm"
                            value={allData.cm}
                            onChoice={handleChange}
                        />

                        <InputBox
                            title="Weight"
                            name="kg"
                            value={allData.kg}
                            onChoice={handleChange}
                        />
                    </div>
                )}

                {allData.unit === "imperial" && (
                    <div
                        className={`${styles.values_container} ${styles.values_container_imperial}`}
                    >
                        <div className={styles.values_wrapper}>
                            <InputBox
                                title="Height"
                                name="ft"
                                value={allData.ft}
                                onChoice={handleChange}
                            />

                            <InputBox
                                name="in"
                                value={allData.in}
                                onChoice={handleChange}
                            />
                        </div>

                        <div className={styles.values_wrapper}>
                            <InputBox
                                title="Weight"
                                name="st"
                                value={allData.st}
                                onChoice={handleChange}
                            />

                            <InputBox
                                name="lbs"
                                value={allData.lbs}
                                onChoice={handleChange}
                            />
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.form_result}>
                {bmi ? (
                    <>
                        <div className={styles.result_intro}>
                            <p>Your BMI is...</p>
                            <span> {bmi}</span>
                        </div>
                        <div className={styles.result_container}>
                            <p>
                                {`
                    Your BMI suggests you’re ${result}. Your ideal weight
                    is `}

                                {allData.unit === "metric" && (
                                    <span>
                                        {getIdealWeightRangeMetric(
                                            Number(allData.cm)
                                        )}
                                    </span>
                                )}

                                {allData.unit === "imperial" && (
                                    <span>
                                        {getIdealWeightRangeImperial(
                                            Number(allData.ft),
                                            Number(allData.in)
                                        )}
                                    </span>
                                )}
                            </p>
                        </div>
                    </>
                ) : (
                    <div className={styles.result_initial}>
                        <span> Welcome!</span>
                        <p>
                            Enter your height and weight and you’ll see your BMI
                            result here
                        </p>
                    </div>
                )}
            </div>
        </form>
    );
};
