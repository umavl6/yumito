import React from 'react'
import CardContainer from './CardContainer'
import HomeInfoCardContainer from './HomeInfoCardContainer'

function Home() {
    //console.log("home rendered");
    return (
        <div>
            <CardContainer/>
            <HomeInfoCardContainer/>
        </div>
    )
}

export default React.memo(Home)
