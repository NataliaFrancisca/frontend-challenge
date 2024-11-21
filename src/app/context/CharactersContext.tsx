'use client';
import { createContext, ReactNode, useState } from "react";
import { TCharacterBasicInfo } from "../ts/types";

interface CharactersContextType {
    initial: TCharacterBasicInfo[];
    search: TCharacterBasicInfo[] | null;
    favorites: TCharacterBasicInfo[] | null;
    setInitial: (characters: TCharacterBasicInfo[]) => void;
    setSearch: (characters: TCharacterBasicInfo[] | null) => void;
    setFavorites: (characters: TCharacterBasicInfo[] | null) => void;
}

export const CharactersContext = createContext<CharactersContextType>({
    initial: [],
    search: [],
    favorites: [],
    setInitial: () => {},
    setSearch: () => {},
    setFavorites: () => {},
});

export const CharactersProvider = ({children}: {children: ReactNode}) => {
    const [initial, setInitial] = useState<TCharacterBasicInfo[]>([]);
    const [search, setSearch] = useState<TCharacterBasicInfo[] | null>(null);
    const [favorites, setFavorites] = useState<TCharacterBasicInfo[] | null>(null);
    
    return(
        <CharactersContext.Provider value={{initial ,search, favorites, setInitial, setSearch, setFavorites}}>
            {children}
        </CharactersContext.Provider>
    )
}