import React from 'react';
import bg from "../../assets/header-bg.jpg"

const Header = () => {
    return (
        <div className="header" style={{background: `#000 url(${bg})`}}>
            Rick & Morty Universe
        </div>
    );
};

export default Header;
