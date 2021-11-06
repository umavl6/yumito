import React from 'react'
import HomeInfoCard from './HomeInfoCard'
import {Link} from 'react-router-dom';

function HomeInfoCardContainer() {
    //console.log("homeinfocardcontner rendered");
    return (
        <div className="infoCardContainer d-flex flex-wrap justify-content-center align-items-center bd-grey">
            <Link to="/menu"><HomeInfoCard infoImg="https://cdn.pixabay.com/photo/2018/03/07/18/42/menu-3206749_960_720.jpg" infoTitle="Order your favourite food" infoLink="Check the Menu"/></Link>
            <Link to="#"><HomeInfoCard infoImg="https://images.squarespace-cdn.com/content/v1/56e33390b6aa60415bb5ff39/1477050412477-Q6ZG3W3JNFQZPFC4CHIP/Hours-Location-ICONS.jpg" 
            infoTitle=" Outer Ring Rd, J P Nagar, Bangalore-560078" infoLink={`All days
            10AM - 9PM`}/></Link>
            
        </div>
    )
}

export default React.memo(HomeInfoCardContainer)
