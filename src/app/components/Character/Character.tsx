'use client';
import Image from "next/image";

import "./Character.scss";
import { TCharacterBasicInfo } from "@/app/ts/types";
import Link from "next/link";
import HeartButton from "../HeartButton/HeartButton";

const Character = (props: {character: TCharacterBasicInfo }) => {
    const { name, thumbnail } = props.character;

    return(
        <article className="article__character" >
            <Link href={`/heroi/${props.character.id}`}>
                <Image 
                    width={1000}
                    height={1000}
                    alt={name}
                    className="img__character"
                    src={`${thumbnail.path}.${thumbnail.extension}`} 
                />
            </Link>
          
            <div className="div__character-details">
                <h2>{name}</h2>
                <HeartButton character={props.character} />
            </div>
        </article>
    )
}

export default Character;