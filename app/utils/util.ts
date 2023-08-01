export const getMeterFromCentimeter = (cm: number) => {
    return cm / 100;
};

export const getTotalPounds = (stone: number, pound: number) => {
    return stone * 14 + pound;
};

export const getTotalInches = (feet: number, inches: number) => {
    return feet * 12 + inches;
};

export const getStoneFromPound = (pound: number) => {
    return Math.floor(pound / 14);
};

export const getRemainingPoundFrommStone = (pound: number) => {
    return Math.floor(pound % 14);
};

export const getBmiForMetric = (kilogram: number, meter: number) => {
    return kilogram / Math.pow(meter, 2);
};

export const getBmiForImperial = (pound: number, inches: number) => {
    return (pound / Math.pow(inches, 2)) * 703;
};

export const getIdealWeightRangeMetric = (individualHeigth: number) => {
    const heigthInMeters = getMeterFromCentimeter(individualHeigth);

    const minRange = 2.2 * 18.5 + 3.5 * 18.5 * (heigthInMeters - 1.5);
    const maxRange = 2.2 * 24.9 + 3.5 * 24.9 * (heigthInMeters - 1.5);

    const minRangeResult = Math.round(minRange * 10) / 10;
    const maxRangeResult = Math.round(maxRange * 10) / 10;

    return `${minRangeResult}kgs - ${maxRangeResult}kgs`;
};

export const getIdealWeightRangeImperial = (feet: number, inches: number) => {
    const heigthInInches = getTotalInches(feet, inches);

    const minRange = 5 * 18.5 + (18.5 / 5) * (heigthInInches - 60);
    const maxRange = 5 * 24.9 + (24.9 / 5) * (heigthInInches - 60);

    return `${getStoneFromPound(minRange)}st ${getRemainingPoundFrommStone(
        minRange
    )}lbs  - ${getStoneFromPound(maxRange)}st ${getRemainingPoundFrommStone(
        maxRange
    )}lbs `;
};
