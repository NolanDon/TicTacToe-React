import React, { useState } from "react";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  boardRow: {
    width: '50px',
    height: '50px'
  }
})

function Board() {
  const [boardSquares, setBoardSquares] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const classes = useStyles();

  const handleClick = (index) => {
    const squares = [...boardSquares];

    if (squares[index]) return;

    squares[index] = xIsNext ? "X" : "O";

    setBoardSquares(squares);

    setXIsNext(!xIsNext);
  };

  function Square(props) {
    return <button onClick={props.onClick}>{props.value}</button>;
  }

  const renderSquare = (index) => {
    return (
      <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
    );
  };

  return (
    <div>
      <div className={classes.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={classes.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={classes.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
