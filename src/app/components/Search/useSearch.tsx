import { CharactersContext } from "@/app/context/CharactersContext";
import { SearchActionContext } from "@/app/context/SearchActionContext";
import { fetchCharacterByName } from "@/app/functions/fetchCharacter";
import { FormEvent, useContext, useEffect, useState } from "react"

export const useSearch = () => {
    const [inputSearchValue, setInputSearchValue] = useState("");

    const { search, setSearch } = useContext(CharactersContext);
    const { setStatus } = useContext(SearchActionContext);

    const onSubmitSearch = async(e: FormEvent) => {
        e.preventDefault();
        setStatus(true);

        const response = await fetchCharacterByName(inputSearchValue);

        if(response){
            setSearch(response.results);
        }

        setStatus(false);
    };

    useEffect(() => {
        if(search && inputSearchValue == ""){
            setSearch(null);
        }
    },[inputSearchValue]);

    return { inputSearchValue, setInputSearchValue, onSubmitSearch }
}