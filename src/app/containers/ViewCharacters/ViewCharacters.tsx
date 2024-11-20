'use client';
import "./ViewCharacters.scss";

import Image from "next/image";
import Characters from "../Characters/Characters";
import { useContext } from "react";
import { CharactersContext } from "@/app/context/CharactersContext";
import { SearchActionContext } from "@/app/context/SearchActionContext";
import { TCharacterBasicInfo } from "@/app/ts/types";

const formatNumberCharacters = (size: number) => size > 1 ? `Encontrado ${size} heróis` : "Encontrado 1 herói";

const ViewCharacters = (props: {characters: Array<TCharacterBasicInfo>}) => {

    const { search } = useContext(CharactersContext);
    const { status } = useContext(SearchActionContext);

    return(
        <main className="view-characters__container">
            <menu className="characters__actions">
                <h2 className="h2__number-characters">
                    {(search && search.length > 0) && formatNumberCharacters(search.length)}
                    {(!search && props.characters) && formatNumberCharacters(props.characters.length)}
                </h2>
                <nav>
                    <section className="section__sort-by-name">
                        <Image 
                            src={"/icon/heroi/heroi.svg"} 
                            width={10} 
                            height={10} 
                            alt="heroi"
                        />
                        <span 
                            className="span__name-action">
                                Ordenados por nome - A/Z
                        </span>

                        <label className="label__switch-sort-by-name">
                            <input type="checkbox" />
                            <span className="slider" />
                        </label>
                    </section>

                    <section className="section__filter-by-favorites">
                        <label className="label__switch-filter-by-favorites">
                            <input type="checkbox" id="filter-favorites" />
                            <span className="icon" />
                        </label>
                        <span className="span__name-action">Somente favoritos</span>
                    </section>
                </nav>
            </menu>

            {(search && search.length == 0) && <Characters characters={null} />}
            {(search == null && !status) ? <Characters characters={props.characters} /> : <Characters characters={search} />}
        </main>
    )
}

export default ViewCharacters;