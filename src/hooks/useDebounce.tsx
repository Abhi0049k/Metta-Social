import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { currencyAtom } from "../atoms/atoms";

const useDebounce = (t: number) => {
    const [currency, setCur] = useState<string>('')
    const [debounceValue, setDebounceValue] = useState<string>(currency);

    const setCurrency = useSetRecoilState(currencyAtom)

    useEffect(() => {
        const id = setTimeout(() => {
            setDebounceValue(() => currency);
        }, t)
        return () => { clearTimeout(id) }
    }, [currency, t])

    setCurrency(() => debounceValue)

    return { currency, setCur }
}

export default useDebounce