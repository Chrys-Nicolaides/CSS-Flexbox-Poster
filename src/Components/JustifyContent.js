import React from 'react'

const JustifyContent = () => {
    return (
        <div>
        <div className="FlexHeading">justify-content</div>
            <header className="FlexSubHeading">flex-start</header>
            <div className="flex-start-container" style={{touchAction: "none"}}>
            <div className="justify-box-1"></div>
            <div className="justify-box-2"></div>
            <div className="justify-box-3"></div>
            </div>
            
            <header className="FlexSubHeading">flex-end</header>
            <div className="flex-end-container" style={{touchAction: "none"}}>
            <div className="justify-box-1"></div>
            <div className="justify-box-2"></div>
            <div className="justify-box-3"></div>
            </div>

            <header className="FlexSubHeading">center</header>
            <div className="flex-center-container" style={{touchAction: "none"}}>
            <div className="justify-box-1"></div>
            <div className="justify-box-2"></div>
            <div className="justify-box-3"></div>
            </div>

            <header className="FlexSubHeading">space-between</header>
            <div className="space-between-container" style={{touchAction: "none"}}>
            <div className="justify-box-1"></div>
            <div className="justify-box-2"></div>
            <div className="justify-box-3"></div>
            </div>

            <header className="FlexSubHeading">space-around</header>
            <div className="space-around-container" style={{touchAction: "none"}}>
            <div className="justify-box-1"></div>
            <div className="justify-box-2"></div>
            <div className="justify-box-3"></div>
            </div>

            <header className="FlexSubHeading">space-evenly</header>
            <div className="space-evenly-container" style={{touchAction: "none"}}>
            <div className="justify-box-1"></div>
            <div className="justify-box-2"></div>
            <div className="justify-box-3"></div>
            </div>
    </div>
   
    )
}

export default JustifyContent
