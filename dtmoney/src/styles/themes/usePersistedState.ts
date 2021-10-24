//persistir o tema no localStorage
import { useEffect, useState, Dispatch, SetStateAction } from "react";

type Response<T>  = [
    T,
    Dispatch<SetStateAction<T>>,
];

export function usePersistedState<T>(key: string, initialState: T) {
    const [state, setState] = useState(()=>{
        //buscar thema no local..
        const storageValue = localStorage.getItem(key)

        if (storageValue) {
            return JSON.parse(storageValue)
        } else {
            return initialState
        }
    });

    //toda vez q o tema e alterado gravar no localstorage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

    return [state, setState];
}