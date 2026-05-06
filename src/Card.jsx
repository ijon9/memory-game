import { useState } from 'react'

function Card({color, handleClick}) {
    const divStyle = {
      border: "1px solid black",
      width: "75px",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }

    const colorStyle = {
        backgroundColor: color,
        height: "50px",
        width: "50px",
        border: "1px solid black"
    };

  return (
    <>
    <div style={divStyle} onClick={() => handleClick(color)}>
      <div style={colorStyle}> 

      </div>
      <div>
        {color}
      </div>
    </div>
     
    </>
  )
}

export default Card
