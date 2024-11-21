'use client';
import "./ViewCharacters.scss";

import Characters from "../Characters/Characters";
import { TCharacterBasicInfo } from "@/app/ts/types";
import { useViewCharacters } from "./useViewCharacters";
import Menu from "@/app/components/Menu/Menu";

const ViewCharacters = (props: {characters: Array<TCharacterBasicInfo>}) => {

    const { initial, search, status, favorites } = useViewCharacters(props.characters);

    if(favorites){
        return(
            <main className="view-characters__container">
                <Menu />
                <Characters characters={favorites} />
            </main>
        )
    }

    if(search === null && !status){
        return(
            <main className="view-characters__container">
                <Menu />
                <Characters characters={initial} />
            </main>
        )
    }else{
        return(
            <main className="view-characters__container">
                <Menu  />
                <Characters characters={search} />
            </main>
        )
    }
}

export default ViewCharacters;