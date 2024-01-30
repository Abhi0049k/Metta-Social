import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { CountryInfoI, countryI } from "../shared/types"

const useCountryList = (val: string) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setErr] = useState<string>('');
    const [countries, setCountries] = useState<Array<countryI>>([])

    const fetchCountries = async (val: string) => {
        setLoading((prev) => !prev);

        try {
            const res: AxiosResponse<Array<CountryInfoI>> = await axios.get(`https://restcountries.com/v3.1/currency/${val}`)
            setCountries(() => res.data.reduce((acc: Array<countryI>, el: CountryInfoI) => {
                const obj: countryI = {
                    name: el.name.common,
                    flag: el.flags.png,
                    capital: el.capital[0]
                }
                return [...acc, obj]
            }, []))
        } catch (err) {
            setErr(err?.response.data.message)
        }

        setLoading((prev) => !prev);
    }

    useEffect(() => {
        setErr('')
        if (val)
            fetchCountries(val);
    }, [val])

    return { loading, countries, error }
}

export default useCountryList