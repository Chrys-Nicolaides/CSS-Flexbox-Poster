import React from "react";
import { Resizable, ResizableBox } from "react-resizable";

const FlexWrap = () => {
  return (
    <div>
      <header className="FlexHeading">flex-wrap</header>
      <ResizableBox
        width={600}
        height={200}
        minConstraints={[500, 200]}
        maxConstraints={[900, 200]}
        className="flex-wrap-container container"
      >
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </ResizableBox>
    </div>
  );
};

export default FlexWrap;
