'use client';

import Image from "next/image";

import "./Search.scss";

import { useSearch } from "./useSearch";

const Search = () => {

    const { setInputSearchValue, onSubmitSearch } = useSearch();

    return(
        <form className="search__element" onSubmit={(e) => onSubmitSearch(e)}>
            <Image src="/icon/lupa/lupa.svg" width={10} height={10} alt="icon search" />
            
            <input 
                type="text" 
                placeholder="Procure por heróis" 
                onChange={(e) => setInputSearchValue(e.target.value)}
            />
        </form>

    )
}

export default Search;