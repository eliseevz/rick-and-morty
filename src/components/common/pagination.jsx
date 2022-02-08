import React from 'react';
import {useCharacter} from "../../hooks/useCharacter";
import Button from "../UI/Button";

const Pagination = () => {

    const {pagination, dataLoaded, isLoading, currentPage, fetchData} = useCharacter()

    const prevPageHandler = () => {
        if (pagination.prev) {
            const params = pagination.prev.split("/")
            const splitedParams = params[params.length - 1]
            fetchData(splitedParams)
        }
    }

    const nextPageHandler = () => {
        if (pagination.next) {
            const params = pagination.next.split("/")
            const splitedParams = params[params.length - 1]
            fetchData(splitedParams)
        }
    }

    return (
        <div className="mt-4 mb-4">
            {
                dataLoaded && !isLoading &&
                    <div>
                        pages: {currentPage} of {pagination.pages} / <Button onClick={prevPageHandler} arrow={false}>prev</Button> / <Button onClick={nextPageHandler} arrow={false}>next</Button>
                    </div>
            }

        </div>
    );
};

export default Pagination;
