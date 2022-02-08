import React, {useEffect, useState} from 'react';
import DropDown from "./dropDown";
import TextField from "./textField";
import Button from "../UI/Button";
import {useCharacter} from "../../hooks/useCharacter";
import {transformFilterParams} from "../../utils/transformFilterParams";

const FilterBar = () => {

    const initialConfigState = {
        name: {
            value: "",
            placeholder: "Name"
        },
        status: {
            placeholder: "Select status",
            value: "",
            options: ["Alive", "Dead", "Unknown", "Not selected"]
        },
        species: {
            value: "",
            placeholder: "Species"
        },
        type: {
            value: "",
            placeholder: "Type"
        },
        gender: {
            placeholder: "Select gender",
            value: "",
            options: ["Female", "Male", "Genderless", "Unknown", "Not selected"]
        }
    }

    const [config, setConfig] = useState(initialConfigState)

    const {fetchData} = useCharacter()

    const handleChange = (e) => {
        setConfig(prevState => ({
            ...prevState,
            [e.name]: {
                ...prevState[e.name],
                value: e.value
            }
        }))
    }

    const clearHandler = () => {
        setConfig(initialConfigState)
        fetchData({page: 1})
    }

    const handleSubmit = () => {
        const params = transformFilterParams(config)
        fetchData(params)
    }


    return (
        <div className="d-flex justify-content-between mt-5">
            <TextField
                name="name"
                placeholder={config.name.placeholder}
                onChange={handleChange}
                value={config.name.value}
            />
            <DropDown
                name="status"
                placeholder={config.status.placeholder}
                onChange={handleChange}
                options={config.status.options}
                value={config.status.value}
            />
            <TextField
                name="species"
                placeholder={config.species.placeholder}
                value={config.species.value}
                onChange={handleChange}
            />
            <TextField
                name="type"
                placeholder={config.type.placeholder}
                value={config.type.value}
                onChange={handleChange}
            />
            <DropDown
                name="gender"
                placeholder={config.gender.placeholder}
                onChange={handleChange}
                options={config.gender.options}
                value={config.gender.value}
            />
            <Button arrow={true} onClick={handleSubmit}>search</Button>
            <Button onClick={clearHandler}>clear</Button>
        </div>
    );
};

export default FilterBar;
