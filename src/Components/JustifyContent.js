import React from 'react'

const JustifyContent = () => {
    return (
        <div>
            <div className="FlexHeading">justify-content<em className="secondary-text"> (default: start)</em></div>
            <header className="FlexSubHeading">flex-start</header>
            <div className="flex-start-container container" style={{ touchAction: "none" }}>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>

            <header className="FlexSubHeading">flex-end</header>
            <div className="flex-end-container container" style={{ touchAction: "none" }}>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>

            <header className="FlexSubHeading">center</header>
            <div className="flex-center-container container" style={{ touchAction: "none" }}>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>

            <header className="FlexSubHeading">space-between</header>
            <div className="space-between-container container" style={{ touchAction: "none" }}>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>

            <header className="FlexSubHeading">space-around</header>
            <div className="space-around-container container" style={{ touchAction: "none" }}>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>

            <header className="FlexSubHeading">space-evenly</header>
            <div className="space-evenly-container container" style={{ touchAction: "none" }}>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>

    )
}

export default JustifyContent
