import React, { useState } from "react";
import "./App.css";
// import marked from "marked";

// import ReactMarkdown from "react-markdown";
import FlexWrap from "./Components/FlexWrap";
import JustifyContent from "./Components/JustifyContent";
import AlignContent from "./Components/AlignContent";
import AlignItems from "./Components/AlignItems";
import Order from "./Components/Order";

function App() {
  const [primaryColor, setPrimaryColor] = useState("white");
  const [secondaryColor, setSecondaryColor] = useState("#0F0F0F");

  document.documentElement.style.setProperty("--primary-color", primaryColor);
  document.documentElement.style.setProperty(
    "--secondary-color",
    secondaryColor
  );

  return (
    <div className="App">
      <div className="color-picker-header">color picker</div>
      <div className="custom-color-picker">
        <label>background-color</label>
        <input
          className="input-color-picker"
          type="color"
          onChange={(e) => setSecondaryColor(e.target.value)}
        />
        <label>color</label>
        <input
          className="input-color-picker"
          type="color"
          onChange={(e) => setPrimaryColor(e.target.value)}
        />
      </div>
      <div>
        <hr className="horizontal-line"></hr>
      </div>
      <h2>CSS</h2>
      <h1>Flexbox.</h1>
      <div>
        <p>
          I'm baby locavore retro shoreditch offal. Jean shorts mixtape
          gluten-free, forage raclette sriracha sustainable subway tile portland
          yuccie hammock fixie. Chartreuse squid occupy try-hard bespoke
          flannel. Hoodie vape shaman offal, af meh mustache. Bushwick kombucha
          slow-carb neutra try-hard.
        </p>
        <FlexWrap />
        <JustifyContent />
        <AlignContent />
        <AlignItems />
        <Order />
      </div>
    </div>
  );
}

export default App;
