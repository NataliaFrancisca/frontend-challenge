import Image from "next/image";
import "./Characters.scss";

type TCharacterBasicInfo = {
    name: string,
    id: number,
    thumbnail: {
        extension: string,
        path: string
    }
}

const Characters = (props: {characters: Array<TCharacterBasicInfo>}) => {

    return(
        <main className="characters__grid">

            {props.characters.map((character) => (
                <article className="article__character">
                    <Image 
                        width={1000}
                        height={1000}
                        alt={character.name}
                        className="img__character"
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                    />

                    <div className="div__character-details">
                        <h2>{character.name}</h2>
                        <Image 
                            src={"/icon/heart/heart.svg"} 
                            width={10} 
                            height={10} 
                            alt="heroi"
                        />
                    </div>
                </article>
            ))}
        </main>
    )
}

export default Characters;
