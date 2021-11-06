import React from 'react';
// import {Link} from 'react-router-dom';

function HomeInfoCard({infoImg, infoTitle, infoLink}) {
  //console.log("homeinfocard rendered");
    return (
        <div className="card homeInfoCard text-center">
  <img className="card-img-top" src={infoImg} alt=""/>
  <div className="card-body p-2">
    <h3 className="card-title">{infoTitle}</h3>
    <p className="lead card-link"><b>{infoLink}</b><i className="bi bi-arrow-right-square"></i></p>
  </div>
</div>
    )
}

export default HomeInfoCard
