import React from 'react'

function DealCard(data) {
    //console.log(data,"deals")
    return (
        <div className="dealCard text-center badge bg-danger p-2">
            <h3>Upto</h3>
            <h1>{data.text}</h1>
            <h5>{data.desc}</h5>
        </div>
    )
}

export default DealCard
