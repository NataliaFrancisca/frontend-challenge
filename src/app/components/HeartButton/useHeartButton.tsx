import { isFavorite, toggleFavorite } from "@/app/storage/fav";
import { TCharacterBasicInfo } from "@/app/ts/types";
import { useEffect, useState } from "react";

export const useHeartButton = (character: TCharacterBasicInfo) => {
    const [isFav, setIsFav] = useState(false);

    const onToggleFavorite = async() => {
        const response = await toggleFavorite(character as TCharacterBasicInfo);
        if(response){
            setIsFav(!isFav);
        }
    }

    const checkIsAlreadyFavorite = async() => {
        const isAlreadFavorite = await isFavorite(character);
        setIsFav(isAlreadFavorite);
    }
    
    useEffect(() => {
        checkIsAlreadyFavorite();
    },[]);

    return { isFav, onToggleFavorite }
};