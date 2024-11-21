"use server";

import { cookies } from "next/headers";
import { TCharacterBasicInfo } from "../ts/types";
import { initializeStorage } from "./storage";

const ONE_YEAR = 365 * 24 * 60 * 60;
const STORAGE_FAVORITES = "MARVEL_FAVORITES";

export async function getFavorites(){
    const cookiesResponse = await cookies();
    const cookie = cookiesResponse.get(STORAGE_FAVORITES);

    if(cookie && cookie.value){
        return JSON.parse(cookie.value) as TCharacterBasicInfo[];
    }

    return [];
}

export async function isFavorite(favorite: TCharacterBasicInfo){
    const cookiesResponse = await getFavorites();

    if(cookiesResponse){
        return cookiesResponse.some((cookie) => cookie.id === favorite.id);
    }

    return false;
}

export async function toggleFavorite(favorite: TCharacterBasicInfo){
    await initializeStorage();

    const cookiesResponse = await cookies();
    const favorites = await getFavorites();

    if(favorites){
        const toggle = favorites.find((favId) => favId.id === favorite.id);

        if(toggle){
            const favoritesUpdated = favorites.filter((favId) => favId.id !== favorite.id);
            cookiesResponse.set(STORAGE_FAVORITES, JSON.stringify(favoritesUpdated), {maxAge: ONE_YEAR});
            return true;
        }

        if(favorites.length === 5){
            return false;
        }

        const favoritesUpdated = [...favorites, {name: favorite.name, id: favorite.id, thumbnail: favorite.thumbnail }];
        cookiesResponse.set(STORAGE_FAVORITES, JSON.stringify(favoritesUpdated), {maxAge: ONE_YEAR});
        return true;
    }

    return false;
}
