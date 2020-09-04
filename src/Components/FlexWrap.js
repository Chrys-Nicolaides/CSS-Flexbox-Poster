import React from 'react'

const FlexWrap = () => {
    return (
        <div>
            <header className="FlexHeading">flex-wrap</header>
            <div className="flex-wrap-container container" style={{ touchAction: "none" }}>
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
            </div>
        </div>
    )
}

export default FlexWrap;
