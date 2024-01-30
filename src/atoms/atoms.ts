import { atom } from "recoil";
import { currencyT } from "../shared/types";

export const currencyAtom = atom<currencyT>({
    key: 'currencyAtom',
    default: ''
})