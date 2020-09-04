import React, { useState } from "react";
import "./App.css";
import FlexWrap from "./Components/FlexWrap";
import JustifyContent from "./Components/JustifyContent";
import AlignContent from "./Components/AlignContent";


function App() {

  const [primaryColor, setPrimaryColor] = useState("#424242");
  const [secondaryColor, setSecondaryColor] = useState("pink");

  document.documentElement.style.setProperty("--primary-bg-color", primaryColor);
  document.documentElement.style.setProperty("--secondary-bg-color", secondaryColor);

  return (
    <div className="App">
      <div>
        <label>Background:</label>
        <input className="input-color-picker" type="color"
          onChange={(e) => setPrimaryColor(e.target.value)} />
        <label>Color:</label>
        <input className="input-color-picker" type="color"
          onChange={(e) => setSecondaryColor(e.target.value)} />
      </div>
      <FlexWrap />
      <JustifyContent />
      <AlignContent />
    </div>
  );
}

export default App;
