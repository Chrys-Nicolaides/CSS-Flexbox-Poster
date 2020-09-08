import React from "react";
import { Resizable, ResizableBox } from "react-resizable";

const FlexWrap = () => {
  return (
    <div>
      <header className="FlexHeading">flex-wrap</header>
      <ResizableBox
        width={600}
        height={200}
        className="flex-wrap-container container"
        minConstraints={[500, 200]}
        maxConstraints={[800, 200]}
      >
        {/* <span>Contents</span> */}
        {/* <div
          className="flex-wrap-container container"
          
          
        > */}
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
        {/* </div> */}
      </ResizableBox>
    </div>
  );
};

export default FlexWrap;
