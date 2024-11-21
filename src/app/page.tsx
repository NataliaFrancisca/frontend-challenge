"use client";
import { fetchAllCharacters } from "./functions/fetchCharacter";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import ViewCharacters from "./containers/ViewCharacters/ViewCharacters";
import { TCharacterBasicInfo } from "./ts/types";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

export default function Home() {


  const [characters, setCharacters] = useState<TCharacterBasicInfo[] | null>(null);

  const getAllCharacters = async() => {
    const response = await fetchAllCharacters();

    if(response.results){
      setCharacters(response.results);
    }
  }

  useEffect(() => {
    getAllCharacters();
  },[]);
  
  
  
  return (
    <main className="main__page">
      <Header />
      <Search />
      {characters == null && <Loader />}
      {characters && <ViewCharacters characters={characters} /> }
      <footer></footer>
    </main>
  );
}
