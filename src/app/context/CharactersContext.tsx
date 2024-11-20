'use client';
import { createContext, ReactNode, useState } from "react";
import { TCharacterBasicInfo } from "../ts/types";

interface CharactersContextType {
    initial: TCharacterBasicInfo[];
    search: TCharacterBasicInfo[] | null;
    setInitial: (characters: TCharacterBasicInfo[]) => void;
    setSearch: (characters: TCharacterBasicInfo[] | null) => void;
}

export const CharactersContext = createContext<CharactersContextType>({
    initial: [],
    search: [],
    setInitial: () => {},
    setSearch: () => {},
});

export const CharactersProvider = ({children}: {children: ReactNode}) => {
    const [initial, setInitial] = useState<TCharacterBasicInfo[]>([]);
    const [search, setSearch] = useState<TCharacterBasicInfo[] | null>(null);
    
    return(
        <CharactersContext.Provider value={{initial ,search, setInitial, setSearch}}>
            {children}
        </CharactersContext.Provider>
    )
}