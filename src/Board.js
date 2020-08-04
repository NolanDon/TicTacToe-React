import React, { useState } from "react";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  boardRow: {
    display: 'flex',
    justifyContent: 'center',
    overflowWrap: 'wrap',
        height: '50px'
  },
  button: { 
    width: '50px',
    height: '50px'
  },
  status: {
    textAlign: 'center',
    margin: '50px'
  }
})

function Board() {
  const [boardSquares, setBoardSquares] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const classes = useStyles();

  const handleClick = (index) => {
    const squares = [...boardSquares];
    console.log('squares: ', squares)
    console.log(index)
    console.log('calculateWinner: ', calculateWinner(boardSquares))

    if (calculateWinner(boardSquares) || squares[index]) return;

    squares[index] = xIsNext ? "X" : "O";

    setBoardSquares(squares);

    setXIsNext(!xIsNext);
  };
  

  function Square(props) {
    return <button className={classes.button} onClick={props.onClick}>{props.value}</button>;
  }

  const renderSquare = (index) => {
    return (
      <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
    );
  };

  function calculateWinner(squares) {

    const winning = [
      [1,2,3],
      [4,5,6],                        
      [7,8,9],
      [1,4,7],
      [2,5,8],
      [3,6,9],
      [1,5,9],
      [3,5,7],
    ]

    for (let i = 0; i < winning.length; i++) {
      const [a,b,c] = winning[i]

      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
    return null
  }

  //initialize status
  let status;
  const winner = calculateWinner(boardSquares)
  status = winner ? 
  `Winner = ${winner}` :
  `Next Player: ${xIsNext ? 'X' : 'O'}`


  return (
    <div>
      <div className={classes.status}>{status}</div>
      <div className={classes.boardRow}>
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
      </div>
      <div className={classes.boardRow}>
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
      <div className={classes.boardRow}>
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
      <button onClick={() => {
        resetGame()
      }}>
        reset
      </button>
    </div>
  );
}

export default Board;
