import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const[darkMode, setDarkMode] = useState(false)


  function handleDarkMode(){
    setDarkMode((darkMode) => !darkMode)
  }

  const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        { <h2>Shopster</h2> }

        <div className="App dark">
        <button  onClick={handleDarkMode}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>

      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
