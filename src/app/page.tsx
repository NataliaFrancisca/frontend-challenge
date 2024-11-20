import { fetchAllCharacters } from "./functions/fetchCharacter";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import ViewCharacters from "./containers/ViewCharacters/ViewCharacters";

export default async function Home() {
  const response = await fetchAllCharacters();

  return (
    <main>
      <Header />
      <Search />
      {response.results && <ViewCharacters characters={response.results}/> }
    </main>
  );
}
