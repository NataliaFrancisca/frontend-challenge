import { fetchAllCharacters } from "@/app/functions/fetchCharacter";

import "./ViewCharacters.scss";

import Image from "next/image";
import Loader from "@/app/components/Loader/Loader";
import Characters from "../Characters/Characters";

const ViewCharacters = async() => {

    const response = await fetchAllCharacters();

    if(!response.results){
        <main className="characters__element">
            <Loader />
        </main>
    }
    
    return(
        <main className="view-characters__container">
            <menu className="characters__actions">
                <h2 className="h2__number-characters">Encontrado 20 heróis</h2>
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

            <Characters characters={response.results} />
        </main>
    )
}

export default ViewCharacters;