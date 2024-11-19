const BASE_FETCH = async(url: string) => {
    try{
        const response = await fetch(url, {
            method: "GET"
        });

        if(!response.ok){
            throw new Error("Erro ao fazer a busca dos dados");
        }

        const data = await response.json();
        console.log("Resultado Requisição: ", data.data.results);
        return data.data;
    }catch(error){
        console.log("Erro no frontend: ", error);
    }
}

export const fetchAllCharacters = async () => await BASE_FETCH("/api/all-characters"); 
export const fetchCharacterByName = async (name: string) => await BASE_FETCH(`/api/character-by-name?name=${encodeURIComponent(name)}`);
export const fetchCharacterById = async (id: number) => await BASE_FETCH(`/api/character-by-id?id=${encodeURIComponent(id)}`)

