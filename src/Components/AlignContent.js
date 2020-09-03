import React from "react";

const AlignContent = () => {
  return (
    <div>
      <div className="FlexHeading">align-content</div>
      <header className="FlexSubHeading">flex-start</header>
      <div className="a-flex-start-container" style={{ touchAction: "none" }}>
        <div className="justify-box-1"></div>
        <div className="justify-box-2"></div>
        <div className="justify-box-3"></div>
        <div className="justify-box-4"></div>
        <div className="justify-box-5"></div>
        <div className="justify-box-6"></div>
      </div>
    </div>
  );
};

export default AlignContent;
