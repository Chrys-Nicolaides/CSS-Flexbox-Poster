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
      <div className="FlexHeading">align-content</div>
      <header className="FlexSubHeading">flex-end</header>
      <div className="a-flex-end-container container" style={{ touchAction: "none" }}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="FlexHeading">align-content</div>
      <header className="FlexSubHeading">center</header>
      <div className="a-center-container container" style={{ touchAction: "none" }}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="FlexHeading">align-content</div>
      <header className="FlexSubHeading">stretch</header>
      <div className="a-stretch-container container" style={{ touchAction: "none" }}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="FlexHeading">align-content</div>
      <header className="FlexSubHeading">space-between</header>
      <div className="a-sb-container container" style={{ touchAction: "none" }}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="FlexHeading">align-content</div>
      <header className="FlexSubHeading">space-around</header>
      <div className="a-sa-container container" style={{ touchAction: "none" }}>
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
