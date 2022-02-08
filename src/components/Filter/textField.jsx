import React from 'react';
import cls from "./filterbar.module.css"

const TextField = ({placeholder, onChange, value, name}) => {

    const handleTextFieldChange = (e) => {
        onChange({name, value: e.target.value})
    }

    return (
        <input
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={handleTextFieldChange}
            name={name}
            className={`${cls.textField} ${cls.field}`}
        />
    );
};

export default TextField;
