import React, { useState } from "react";
import "./App.css";
// import marked from "marked";
// import ReactMarkdown from "react-markdown";
import { Resizable, ResizableBox } from "react-resizable";
import FlexWrap from "./Components/FlexWrap";
import JustifyContent from "./Components/JustifyContent";
import AlignContent from "./Components/AlignContent";
import AlignItems from "./Components/AlignItems";
import Order from "./Components/Order";

function App() {
  const [primaryColor, setPrimaryColor] = useState("white");
  const [secondaryColor, setSecondaryColor] = useState("#424242");

  document.documentElement.style.setProperty("--primary-color", primaryColor);
  document.documentElement.style.setProperty(
    "--secondary-color",
    secondaryColor
  );

  return (
    <div className="App">
      <div>
        <label>Background: </label>
        <input
          className="input-color-picker"
          type="color"
          onChange={(e) => setSecondaryColor(e.target.value)}
        />
        <label>Color: </label>
        <input
          className="input-color-picker"
          type="color"
          onChange={(e) => setPrimaryColor(e.target.value)}
        />
      </div>
      <FlexWrap />
      <JustifyContent />
      <AlignContent />
      <AlignItems />
      <Order />
    </div>
  );
}

export default App;
