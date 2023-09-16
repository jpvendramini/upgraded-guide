"use client"
import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useMemo,
    useState,
} from 'react';

type ContextType = {
    pesoPenaPage: number;
    setPesoPenaPage: Dispatch<SetStateAction<number>>;
    pesoPesadoPage: number;
    setPesoPesadoPage: Dispatch<SetStateAction<number>>;
};

const RankingContext = createContext({} as ContextType);
export const useRankingContext = () => useContext(RankingContext);
const RankingContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [pesoPenaPage, setPesoPenaPage] = useState<number>(1);
    const [pesoPesadoPage, setPesoPesadoPage] = useState<number>(1);
    const values = useMemo(
        () => ({
            pesoPenaPage, setPesoPenaPage,
            pesoPesadoPage, setPesoPesadoPage
        }),
        [
            pesoPenaPage, setPesoPenaPage,
            pesoPesadoPage, setPesoPesadoPage
        ]
    );
    return (
        <RankingContext.Provider value={values}>{children}</RankingContext.Provider>
    );
};

export default RankingContextProvider;
