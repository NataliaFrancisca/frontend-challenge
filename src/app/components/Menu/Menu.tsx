import Image from "next/image";
import { useMenu } from "./useMenu";
import { TCharacterBasicInfo } from "@/app/ts/types";

const Menu = (props: {characters: Array<TCharacterBasicInfo>}) => {

    const { search, actionShowSort, actionShowFavorites, formatNumberCharacters, onToggleFavorites, onToggleSort} = useMenu();

    return(
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
                        <input type="checkbox" checked={actionShowSort} onChange={() => onToggleSort()}/>
                        <span className="slider" />
                    </label>
                </section>

                <section className="section__filter-by-favorites">
                    <label className="label__switch-filter-by-favorites">
                        <input type="checkbox" id="filter-favorites" onChange={() => onToggleFavorites()} checked={actionShowFavorites} />
                        <span className="icon" />
                    </label>
                    <span className="span__name-action">Somente favoritos</span>
                </section>
            </nav>
        </menu>
    )
}

export default Menu;