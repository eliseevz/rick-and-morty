import React from 'react';
import Dropdown from "react-dropdown"
import 'react-dropdown/style.css';
import cls from "./filterbar.module.css"

const DropDown = ({name, options, value, onChange, placeholder}) => {

    const handleDropdownChange = (e) => {
        onChange({name, value: e.value})
    }

    return (
        <Dropdown
            options={options}
            value={value}
            placeholder={placeholder}
            onChange={handleDropdownChange}
            defaultValue={"Choose one"}
            name={name}
            controlClassName={`${cls.dropDown} ${cls.field}`}
        />
    );
};

export default DropDown;
