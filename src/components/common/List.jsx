import React, {useState} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";

const List = ({component: Component, data}) => {

    return (
        <div className="row mt-4 characterList">
            {
                data.map(item => <Component key={item.id} data={item}/>)
            }
        </div>
    );
};

export default List;
