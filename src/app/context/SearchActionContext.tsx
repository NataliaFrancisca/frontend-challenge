"use client";

import { createContext, ReactNode, useState } from "react";

interface SearchActionContextType {
    status: boolean,
    setStatus: (status: boolean) => void
}

export const SearchActionContext = createContext<SearchActionContextType>({
    status: false,
    setStatus: () => {}
})

export const SearchActionProvider = ({children}: {children: ReactNode}) => {
    const [status, setStatus] = useState<boolean>(false);
 
    return (
        <SearchActionContext.Provider value={{status, setStatus}}>
            {children}
        </SearchActionContext.Provider>
    )
}