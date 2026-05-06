import { useState, useEffect } from 'react'
import Card from './Card.jsx'

function App() {

  const [picked, setPicked] = useState(new Set());
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const colorClick = (color) => {
    setPicked(prev => {
      const prevSize = prev.size;
      const next = new Set([...prev, color]);
      // Picked all the colors
      if(next.size === 13) {
        // shuffle
        setColors(shuffle(colors));
        setCurrScore(13);
        return new Set();
      }
      // Picked a previously chosen one
      else if(prevSize === next.size) {
        setCurrScore(0);
        setColors(shuffle(colors));
        alert("You lose!");
        return new Set();
      }
      // Picked a new color
      else {
        setCurrScore(next.size);
        // shuffle
        setColors(shuffle(colors));
        return next;
      }
    });
  }

  useEffect(() => {
    if(currScore === 13) {
      alert("You win!");
      setCurrScore(0);
    }
    setHighScore(prev => {
      return Math.max(currScore, prev);
    });
  }, [currScore])

  const [colors, setColors] = useState([
    <Card key="blue" color="blue" handleClick={colorClick}/>, <Card key="green" color="green" handleClick={colorClick}/>, <Card key="cyan" color="cyan" handleClick={colorClick}/>, <Card key="orange" color="orange" handleClick={colorClick} />, <Card key="yellow" color="yellow" handleClick={colorClick} />,
    <Card key="purple" color="purple" handleClick={colorClick} />, <Card key="red" color="red" handleClick={colorClick} />, <Card key="black" color="black" handleClick={colorClick} />, <Card key="white" color="white" handleClick={colorClick} />, <Card key="pink" color="pink" handleClick={colorClick} />,
    <Card key="gray" color="gray" handleClick={colorClick} />, <Card key="brown" color="brown" handleClick={colorClick} />, <Card key="lime" color="lime" handleClick={colorClick}/>
  ]);



  const cardsStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  }
 
  function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
    
      // Swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  // black blue brown cyan gray green lime orange pink purple red white yellow  

  return (
    <>
     <h1 style={{textAlign: "center"}}>
        Memory Game
     </h1>
     <h2>Current Score: {currScore}</h2>
     <h2>Best Score: {highScore}</h2>
     <br></br><br></br>
     <div style={cardsStyle}>
      {colors.map((c) => c)}
     </div>
        
    </>
  )
}

export default App
