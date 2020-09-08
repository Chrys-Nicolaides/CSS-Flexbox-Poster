import React from 'react';

const AlignItems = () => {
  return (
    <div>
      <div className="FlexHeading">align-items</div>
      <header className="FlexSubHeading">flex-start</header>
      <div className="ai-flex-start-container container" style={{ touchAction: "none" }}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="FlexHeading">align-items</div>
      <header className="FlexSubHeading">flex-end</header>
      <div className="ai-flex-end-container container" style={{ touchAction: "none" }}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="FlexHeading">align-items</div>
      <header className="FlexSubHeading">center</header>
      <div className="ai-center-container container" style={{ touchAction: "none" }}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="FlexHeading">align-items</div>
      <header className="FlexSubHeading">stretch</header>
      <div className="ai-stretch-container container" style={{ touchAction: "none" }}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="FlexHeading">align-items</div>
      <header className="FlexSubHeading">baseline</header>
      <div className="ai-baseline-container container" style={{ touchAction: "none" }}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  )
}

export default AlignItems;
