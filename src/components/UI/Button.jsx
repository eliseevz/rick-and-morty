import React from 'react';

const Button = ({children, onClick, arrow=false}) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
            {
                arrow && <i className="bi bi-arrow-right-short"></i>
            }
        </button>
    );
};

export default Button;
