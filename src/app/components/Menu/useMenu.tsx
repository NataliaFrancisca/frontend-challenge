import { CharactersContext } from "@/app/context/CharactersContext";
import { SearchActionContext } from "@/app/context/SearchActionContext";
import { getFavorites } from "@/app/storage/fav";
import { useContext, useEffect, useState } from "react";

export const useMenu = () => {
    const [actionShowFavorites, setActionShowFavorites] = useState(false);
    const [actionShowSort, setActionShowSort] = useState(true);

    const { initial, search, favorites, setFavorites, setInitial, setSearch } = useContext(CharactersContext);
    const { status, setStatus } = useContext(SearchActionContext);

    const onToggleFavorites = () => {
        setActionShowFavorites(!actionShowFavorites);
    }

    const onToggleSort = () => {
        setActionShowSort(!actionShowSort);
        setAtViewSort();
    }

    const setAtViewSort = () => {
        if(search == null && favorites){
            setFavorites([...favorites.sort().reverse()]);
            return;
        }

        if(search === null && !status){
            setInitial([...initial.reverse()]);
            return;
        }else{
            if(search)
            setSearch([...search.reverse()]);
            return;
        }
    }

    const setSearhFavorites = async () => {
        if(actionShowFavorites && search){
            const favorites = await getFavorites();

            if(favorites){
                const searchFavorites = search.filter(searchMap => 
                    favorites.some(fav => fav.id === searchMap.id)
                );
                
                setFavorites(searchFavorites);
            }
        }
    }

    const setAtViewFavorites = async () => {
        if(actionShowFavorites){
            const favorites = await getFavorites();

            if(favorites){
                setFavorites(favorites);
                setStatus(true);
            }

            setStatus(false);
            return;
        }

        setStatus(false);
        setFavorites(null);
    }

    const formatNumberCharacters = (size: number) => {
        return  size > 1 ? `Encontrado ${size} heróis` : "Encontrado 1 herói";
    }

    useEffect(() => {
        setAtViewFavorites();
    },[actionShowFavorites]);


    useEffect(() => {
        if(search && actionShowFavorites){
            setSearhFavorites();
        }
    },[actionShowFavorites, search])

    
    return { search, status, actionShowSort, actionShowFavorites, onToggleFavorites, onToggleSort,  formatNumberCharacters }
};