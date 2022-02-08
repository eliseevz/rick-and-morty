import React, {useEffect, useState} from "react"
import CharacterService from "../services/characters.service";
import {type} from "@testing-library/user-event/dist/type";
import {transformStringParamsToObject} from "../utils/transformStringParamsToObject";


const CharacterContext = React.createContext()

export const useCharacter = () => {
    return React.useContext(CharacterContext)
}

export const CharacterProvider = ({children}) => {

    const [isLoading, setLoading] = useState(false)
    const [characters, setCharacters] = useState([])
    const [pagination, setPagination] = useState(null)
    const [dataLoaded, setDataLoad] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [error, setError] = useState(null)

    const removeItem = (id) => {
        setCharacters(prevState => prevState.filter(chrt => chrt.id !== id))
    }

    const fetchData = async (params) => {
        setError(null)
        setLoading(true)
        setDataLoad(false)
        const readyParams = typeof params === "string"
            ? transformStringParamsToObject(params)
            : params
        try {
            const data = await CharacterService.get(readyParams)
            const {info, results} = data
            setCharacters(results)
            setPagination(info)
            setDataLoad(true)
            setCurrentPage(readyParams.page)
        } catch (e) {
            setError(e.response.data.error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(async () => {
        await fetchData({page: 1})
    }, [])

    return <CharacterContext.Provider value={{isLoading, characters, pagination, dataLoaded, removeItem, currentPage, fetchData, error}}>
        {
            children
        }
    </CharacterContext.Provider>
}