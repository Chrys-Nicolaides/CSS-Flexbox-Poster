import React from "react";
import { Resizable, ResizableBox } from "react-resizable";

const resizableBox = (props) => {
  return (
    <React.fragment>
      <header className="FlexHeading">{props.title}</header>
      <ResizableBox
        width={600}
        height={200}
        className="flex-wrap-container container"
        minConstraints={[500, 200]}
        maxConstraints={[800, 200]}
      ></ResizableBox>
    </React.fragment>
  );
};

export default resizableBox;
