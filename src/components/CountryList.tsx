import { useRecoilValue } from "recoil";
import { currencyAtom } from "../atoms/atoms";
import { useCountryList } from "../hooks";
import CountryCard from "./CountryCard";
import { countryI } from "../shared/types";

function CountryList() {
    const currency = useRecoilValue(currencyAtom)
    const { loading, countries, error } = useCountryList(currency)

    return (
        <div style={styles.resultantDiv}>
            {
                !currency
                    ? <h1 style={styles.initialMsg}>Enter currency to look for <abbr title=""></abbr> country</h1>
                    : loading
                        ? <div style={styles.loader}></div>
                        : error !== ''
                            ? <h1 style={styles.errEl}>{"Not Found"}</h1>
                            : currency !== ''
                                ? countries.map((el: countryI, i: number) => <CountryCard key={i} {...el} />)
                                : ''
            }
        </div>
    );
}

const styles = {
    resultantDiv: {
        minWidth: "85%",
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
        gap: "1rem",
        flexWrap: "wrap" as const
    },
    loader: {
        width: "4rem",
        height: "4rem",
        border: "0.4rem solid silver",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderRadius: "50%",
        animation: "0.8s ease infinite alternate spinner"
    },
    errEl: {
        border: "rgba(255, 0, 0, 1) solid 2px",
        height: "fit-content",
        padding: "1rem",
        backgroundColor: "rgba(255,0,0,.7)",
        color: "white",
        textAlign: "center" as const,
        borderRadius: "1rem"
    },
    initialMsg: {
        color: "rgba(0,0,0,.4)",
        padding: "4px 8px",
        textAlign: "center" as const
    }
}

export default CountryList;