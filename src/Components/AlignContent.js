import React from "react";

const AlignContent = () => {
  return (
    <div>
      <div className="FlexHeading">align-content</div>
      <header className="FlexSubHeading">flex-start</header>
      <div className="a-flex-start-container container" style={{ touchAction: "none" }}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default AlignContent;
