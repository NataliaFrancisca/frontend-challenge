'use client';
import Image from "next/image";

import "./Character.scss";
import { TCharacterBasicInfo } from "@/app/ts/types";
import { useCharacter } from "./useCharacter";
import Link from "next/link";

const Character = (props: {character: TCharacterBasicInfo }) => {
    const { name, thumbnail } = props.character;
    const { isFav, onToggleFavorite } = useCharacter(props.character);

    return(
        <Link className="article__character" href={`/heroi/${props.character.id}`}>
            <Image 
                width={1000}
                height={1000}
                alt={name}
                className="img__character"
                src={`${thumbnail.path}.${thumbnail.extension}`} 
            />

            <div className="div__character-details">
                <h2>{name}</h2>
                <label className="label__switch-favorite">
                    <input 
                        type="checkbox" 
                        id="filter-favorites"
                        checked={isFav}
                        onChange={() => onToggleFavorite()}
                    />
                    <span className="icon" />
                </label>
            </div>
        </Link>
    )
}

export default Character;