import { useState } from 'react'

function Card({color}) {
    const cardStyle = {
        backgroundColor: color,
        height: "50px",
        width: "50px",
    };

  return (
    <>
     <div style={cardStyle}> 

     </div>
    </>
  )
}

export default Card
