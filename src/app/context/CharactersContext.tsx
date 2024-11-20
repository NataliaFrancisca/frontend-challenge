'use client';
import { createContext, ReactNode, useState } from "react";

type TCharacterBasicInfo = {
    name: string,
    id: number,
    thumbnail: {
        extension: string,
        path: string
    }
}

interface CharactersContextType {
    initial: Array<TCharacterBasicInfo>;
    search: Array<TCharacterBasicInfo> | null;
    setInitial: (characters: Array<TCharacterBasicInfo>) => void;
    setSearch: (characters: Array<TCharacterBasicInfo> | null) => void;
}

export const CharactersContext = createContext<CharactersContextType>({
    initial: [],
    search: [],
    setInitial: () => {},
    setSearch: () => {},
});

export const CharactersProvider = ({children}: {children: ReactNode}) => {
    const [initial, setInitial] = useState<Array<TCharacterBasicInfo>>([]);
    const [search, setSearch] = useState<Array<TCharacterBasicInfo> | null>(null);
    
    return(
        <CharactersContext.Provider value={{initial ,search, setInitial, setSearch}}>
            {children}
        </CharactersContext.Provider>
    )
}