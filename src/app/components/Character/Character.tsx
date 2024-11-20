import Image from "next/image";

import "./Character.scss";
import { TCharacterBasicInfo } from "@/app/ts/types";

const Character = (props: {character: TCharacterBasicInfo }) => {

    const { name, thumbnail } = props.character;

    return(
        <article className="article__character">
            <Image 
                width={1000}
                height={1000}
                alt={name}
                className="img__character"
                src={`${thumbnail.path}.${thumbnail.extension}`} 
            />

            <div className="div__character-details">
                <h2>{name}</h2>
                <Image 
                    src={"/icon/heart/heart.svg"} 
                    width={10} 
                    height={10} 
                    alt="heroi"
                />
            </div>
        </article>
    )
}

export default Character;