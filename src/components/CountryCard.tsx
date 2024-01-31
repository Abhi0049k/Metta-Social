import { FC } from "react";
import { countryI } from "../shared/types";

const CountryCard: FC<countryI> = ({ name, capital, flag }: countryI) => {
    return (
        <div style={styles.card}>
            <img style={styles.cardImg} src={flag} alt={name} />
            <div style={styles.cardBody}>
                <h1 style={styles.cardTitle}>{name}</h1>
                <h2 style={styles.cardText}>{capital}</h2>
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
        height: "fit-content",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    cardImg: {
        width: "100%"
    },
    cardBody: {
        paddingTop: "14px",
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingBottom: "14px"
    },
    cardTitle: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        marginBottom: "8px",
        color: "#333"
    },
    cardText: {
        fontSize: "1rem",
        color: "#666"
    }
}

export default CountryCard