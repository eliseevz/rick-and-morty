import React from "react"
import Header from "./components/common/header";
import MainContainer from "./components/common/mainContainer";
import {CharacterProvider} from "./hooks/useCharacter";
import {PopupProvider} from "./hooks/usePopup";

function App() {
  return (
    <div className="App">
        <PopupProvider>
            <CharacterProvider>
                  <Header/>
                  <MainContainer />
            </CharacterProvider>
        </PopupProvider>
    </div>
  );
}

export default App;
