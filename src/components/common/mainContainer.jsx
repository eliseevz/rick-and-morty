import React, {useEffect} from 'react';
import FilterBar from "../Filter/filterBar";
import List from "./List";
import {useCharacter} from "../../hooks/useCharacter";
import CharacterCard from "../character/characterCard";
import Pagination from "./pagination";

const MainContainer = () => {

    const {characters, isLoading, dataLoaded, error} = useCharacter()

    return (
        <div className="container">
            <FilterBar/>
            <Pagination />
            {
                !isLoading && dataLoaded
                ? <List
                        component={CharacterCard}
                        data={characters}
                />
                : <>
                        {
                            error
                            ? error
                            :<p>loading</p>
                        }
                </>
            }
            <Pagination />
        </div>
    );
};

export default MainContainer;
