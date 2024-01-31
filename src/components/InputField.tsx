import React, { FC, useCallback } from "react";
import { useDebounce } from '../hooks'
import { FaMagnifyingGlass } from "react-icons/fa6";

const InputField: FC = () => {
    const { currency, setCur } = useDebounce(1250);

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const val: string = event.target.value;
        setCur(() => val)
    }, [setCur])

    return (
        <div style={styles.inputDiv}>
            <label style={styles.inputLabel} htmlFor="curr">
                <FaMagnifyingGlass style={styles.magnifyingGlass} />
                <input style={styles.inputField} id="curr" type="text" value={currency} placeholder={"Search by currency INR, EUR"} onChange={handleChange} />
            </label>
        </div>
    )
}

const styles = {
    inputDiv: {
        border: "1px solid silver",
        padding: "1.5rem 2rem",
        borderRadius: "2rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    },
    inputLabel: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: "0.5rem",
    },
    magnifyingGlass: {
        fontSize: "2rem",
        color: "rgba(0,0,0,0.5)",
    },
    inputField: {
        height: "3rem",
        fontSize: "1.5rem",
        width: "22rem",
        padding: "0 1rem",
        border: "none",
        borderRadius: "1rem",
        outline: "none"
    },
}

export default InputField;