import React, { useEffect, useState } from "react";

type Props = {
    depencyTreeNotifier: number;
}

const PoolContext = React.createContext({} as Props);

const PoolContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [depencyTreeNotifier, setDepencyTreeNotifier] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDepencyTreeNotifier((prev) => prev + 1);
        }, 10_000);
        return () => {
            interval.unref()
        }
    }, [])

    return <PoolContext.Provider value={{ depencyTreeNotifier }}>{children}</PoolContext.Provider>
}

export default PoolContextProvider;

export const usePool = () => {
    return React.useContext(PoolContext);
}