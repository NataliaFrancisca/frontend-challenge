const BASE_FETCH = async(url: string) => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    try{
        const response = await fetch(`${baseURL}${url}`, {
            method: "GET"
        });

        if(!response.ok){
            throw new Error("Erro ao fazer a busca dos dados");
        }

        const data = await response.json();
        return data.data;
    }catch(error){
        console.log("Erro no frontend: ", error);
    }
}

export const fetchAllCharacters = async () => await BASE_FETCH("/api/all-characters"); 
export const fetchCharacterByName = async (name: string) => await BASE_FETCH(`/api/character-by-name?name=${encodeURIComponent(name)}`);
export const fetchCharacterById = async (id: number) => await BASE_FETCH(`/api/character-by-id?id=${encodeURIComponent(id)}`)
export const fetchCharacterComics = async(id: number) => await BASE_FETCH(`/api/character-comics?id=${encodeURIComponent(id)}`)
