import React, {useContext, useState} from "react";
import rick from "../assets/rick.png"


const PopupContext = React.createContext()

export const usePopup = () => {
    return useContext(PopupContext)
}

export const PopupProvider = ({children}) => {

    const [data, setData] = useState(null)
    const [open, setOpen] = useState(false)

    const toggleOpenPopup = () => {
        setOpen(prevState => !prevState)
    }

    const openCharacter = (characterData) => {
        setData(characterData)
        toggleOpenPopup()
    }

    return <PopupContext.Provider value={{toggleOpenPopup, openCharacter}}>
        {
            children
        }
        <div className={`popup ${open ? "popup-open" : ""}`}>
            <button onClick={toggleOpenPopup} className="popupCloseButton">&times;</button>
            <img className="popupImageRick" src={rick} alt=""/>
            {
                data && open && <div className="popupContent container d-flex">
                    <img src={open ? data.image : null} alt=""/>
                    <div className="popupContentInfo">
                        <h1>{data.name}</h1>
                        <div className="popupInfoElement">
                            status: <span>{data.status}</span>
                        </div>
                        <div className="popupInfoElement">
                            species: <span>{data.species}</span>
                        </div>
                        <div className="popupInfoElement">
                            gender: <span>{data.gender}</span>
                        </div>
                        <div className="popupInfoElement">
                            origin: <span>{data.origin.name}</span>
                        </div>
                        <div className="popupInfoElement">
                            episodes: <span>{data.episode.length}</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    </PopupContext.Provider>
}
