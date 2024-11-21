import { CharactersContext } from "@/app/context/CharactersContext";
import { SearchActionContext } from "@/app/context/SearchActionContext";
import { TCharacterBasicInfo } from "@/app/ts/types";
import { useContext, useEffect } from "react";

export const useViewCharacters = (characters: TCharacterBasicInfo[]) => {

    const { initial, search, favorites, setInitial } = useContext(CharactersContext);
    const { status } = useContext(SearchActionContext);

    useEffect(() => {
        setInitial(characters)
    },[]);

    return { initial, search, status, favorites, setInitial}
};