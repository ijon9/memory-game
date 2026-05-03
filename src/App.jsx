import { useState } from 'react'
import Card from './Card.jsx'

function App() {

  const colors = ["blue", "green", "cyan", "orange", "yellow",
    "purple", "red", "black", "white"]
  const cards = [<Card color="blue" />, <Card color="green" />]

  function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
    
      // Swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // const [items, setItems] = useState(new Set());

  // const addItem = (newItem) => {
  //   setItems(prevSet => new Set([...prevSet, newItem]));
  // };

  return (
    <>
     <h1 style={{textAlign: "center"}}>
        Memory Game
     </h1>
        {cards.map((c) => c)}
    </>
  )
}

export default App
