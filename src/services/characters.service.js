import axios from "axios"

const http = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character"
})

const CharacterService = {
    get: async (params) => {
        const {data} = await http.get("/", {
            params: {
                ...params
            }
        })
        return data
    }
}

export default CharacterService