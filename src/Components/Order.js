import React from "react";

const Order = () => {
  return (
    <div>
      <div className="FlexHeading">order</div>
      {/* <header className="FlexSubHeading">order</header> */}
      <div
        className="order-container container"
        style={{ touchAction: "none" }}
      >
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
      </div>
      {/* <div className="FlexHeading">order</div>
      <header className="FlexSubHeading">order</header>
      <div className="order-reverse-container container" style={{ touchAction: "none" }}>
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
      </div> */}
    </div>
  );
};

export default Order;
