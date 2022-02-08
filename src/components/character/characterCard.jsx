import React, {useEffect, useRef} from 'react';
import cls from "./character.module.css"
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useCharacter} from "../../hooks/useCharacter";
import {usePopup} from "../../hooks/usePopup";

const CharacterCard = ({data, remove}) => {

    const {openCharacter} = usePopup()
    const {dataLoaded, isLoading} = useCharacter()

    const cardRef = useRef()

    useEffect(() => {
        if (cardRef.current && dataLoaded && !isLoading) {
            setTimeout(() => {
                cardRef.current?.classList.toggle(`${cls.cardEntered}`)
            }, Math.random() * (1000 - 200) + 200)
        }
    }, [])


    return (
            <div onClick={() => openCharacter(data)} role="button" ref={cardRef} className={`card mb-3 col-sm-4 ${cls.card}`} >
                <div  className={`row g-0 ${cls.cardContent}`}>
                    <div className="col-md-4">
                        <img src={`${data.image}`} className="img-fluid rounded-start" alt={`${data.name}`}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <div className={cls.info}>
                                <span>status: </span>
                                <span>{data.status}</span>
                            </div>
                            <div className={cls.info}>
                                <span>species: </span>
                                <span>{data.species}</span>
                            </div>
                            <div className={cls.info}>
                                <span>gender: </span>
                                <span>{data.gender}</span>
                            </div>
                            {
                                data.type !== "" &&
                                <div className={cls.info}>
                                    <span>type: </span>
                                    <span>{data.type}</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CharacterCard;
