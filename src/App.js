import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;

function Square(props) {
  return (
    <button onClick={props.onClick}>
      {props.value}
    </button>
  )
}



function Board() {
  const [boardSquares, setBoardSquares] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] =  useState(true);

  const handleClick = index => {
    const squares = [...boardSquares];

    if (squares[index]) return;
    squares[index] = xIsNext ? "X" : "O"


    setBoardSquares(squares);

    setXIsNext(!xIsNext);
  }
}


const renderSquare = (index) => {

return (
  <div>
    <div/>
    <div/>
    <div/>
    <div/>
  </div>
)
}