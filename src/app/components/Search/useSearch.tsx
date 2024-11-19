import { fetchCharacterByName } from "@/app/functions/fetchCharacter";
import { FormEvent, useState } from "react"

export const useSearch = () => {
    const [inputSearchValue, setInputSearchValue] = useState("");

    const onSubmitSearch = async(e: FormEvent) => {
        e.preventDefault();

        const response = await fetchCharacterByName(inputSearchValue);
        console.log("RESPONSE", response);
    };

    return { inputSearchValue, setInputSearchValue, onSubmitSearch }
}