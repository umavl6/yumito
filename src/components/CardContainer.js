import React from 'react'
import '../css/home-cards.css'

function CardContainer() {
    //console.log("CardContainer rendered");
    return (
        <div className="full-container-fluid">
            <img className="img-fluid" id="home-img" src="https://i.pinimg.com/originals/33/ef/8b/33ef8b9c0b902154a6cd4103a21275ef.jpg" alt="home-banner"/>
        </div>
    )
}

export default React.memo(CardContainer)
