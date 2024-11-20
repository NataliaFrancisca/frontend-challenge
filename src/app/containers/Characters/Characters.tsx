'use client';
import "./Characters.scss";
import { useContext } from "react";
import { SearchActionContext } from "@/app/context/SearchActionContext";
import Loader from "@/app/components/Loader/Loader";
import Character from "@/app/components/Character/Character";
import { TCharacterBasicInfo } from "@/app/ts/types";

const Characters = (props: {characters: Array<TCharacterBasicInfo> | null}) => {

    const { status } = useContext(SearchActionContext);

    if(status){
        return(
            <main className="characters__grid full-width">
                <Loader />
            </main>
        )
    }

    if(props.characters == null){
        return(
            <main className="characters__grid full-width">
                <h2 className="h2__not-found">Nenhum herói foi encontrado</h2>
            </main>
        )
    }

    return(
        <main className="characters__grid">
            {props.characters.map((character) => (
                <Character character={character} key={character.id} />
            ))}
        </main>
    )
}

export default Characters;
