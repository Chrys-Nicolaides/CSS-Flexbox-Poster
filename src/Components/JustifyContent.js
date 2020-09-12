import React from "react";
import { Resizable, ResizableBox } from "react-resizable";

const JustifyContent = () => {
  return (
    <div>
      <div className="FlexHeading">
        justify-content<em className="secondary-text"> (default: start)</em>
      </div>
      <header className="FlexSubHeading">flex-start</header>
      <div
        className="flex-start-container container"
        style={{ touchAction: "none" }}
      >
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      <header className="FlexSubHeading">flex-end</header>
      <div
        className="flex-end-container container"
        style={{ touchAction: "none" }}
      >
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      <header className="FlexSubHeading">center</header>
      <div
        className="flex-center-container container"
        style={{ touchAction: "none" }}
      >
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      <header className="FlexSubHeading">space-between</header>
      <ResizableBox
        width={600}
        height={200}
        minConstraints={[500, 200]}
        maxConstraints={[900, 200]}
        className="space-between-container container"
        style={{ touchAction: "none" }}
      >
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </ResizableBox>

      <header className="FlexSubHeading">space-around</header>
      <ResizableBox
        width={600}
        height={200}
        minConstraints={[500, 200]}
        maxConstraints={[900, 200]}
        className="space-around-container container"
        style={{ touchAction: "none" }}
      >
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </ResizableBox>

      <header className="FlexSubHeading">space-evenly</header>
      <ResizableBox
        width={600}
        height={200}
        minConstraints={[500, 200]}
        maxConstraints={[900, 200]}
        className="space-evenly-container container"
        style={{ touchAction: "none" }}
      >
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </ResizableBox>
    </div>
  );
};

export default JustifyContent;
