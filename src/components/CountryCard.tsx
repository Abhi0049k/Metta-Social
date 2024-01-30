import { FC } from "react";
import { countryI } from "../shared/types";

const CountryCard: FC<countryI> = ({ name, capital, flag }: countryI) => {
    return (
        <div style={styles.card}>
            <img style={styles.cardImg} src={flag} alt={name} />
            <div style={styles.cardBody}>
                <h1>{name}</h1>
                <h2>{capital}</h2>
            </div>
        </div>
    );
}

const styles = {
    card: {
        border: '1px solid silver',
        borderRadius: "1rem",
        overflow: "hidden",
        width: "25rem",
        height: "fit-content"
    },
    cardImg: {
        width: "100%"
    },
    cardBody: {
        paddingTop: "14px",
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingBottom: "14px"
    }
}

export default CountryCard