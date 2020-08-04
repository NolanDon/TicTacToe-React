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
  const [boardSquares, setBoardSquare] = useState([Array(9).fill(null)]);
  const [xIsNext, setXisNext] =  useState(true);
}