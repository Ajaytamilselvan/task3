import React, { useState } from "react";
import "./Xogame.css";
import { useNavigate } from "react-router-dom";

const Xogame = () => {

  const [board, setBoard] = useState(Array(9).fill(null)); 
  const [isXTurn, setIsXTurn] = useState(true); 
  const winner = calculateWinner(board); 

  const handleClick = (index) => {
    if (board[index] || winner) return; 

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O"; 
    setBoard(newBoard);
    setIsXTurn(!isXTurn); 
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  const navclose=useNavigate();
  const handleClose=()=>{
    navclose('/Nav')
  }

  return (
    <>
      <div className="close-btn"><button onClick={handleClose}>X</button></div>
      <div className="game">
      <h1>X-O Game</h1>
      {winner ? <h2>Winner: {winner}</h2> : <h2>Next Player: {isXTurn ? "X" : "O"}</h2>}
      <div className="board">
        {board.map((value, index) => (
          <button key={index} className="square" onClick={() => handleClick(index)}>
            {value}
          </button>
        ))}
      </div>
      <button className="reset" onClick={resetGame}>
        Restart
      </button>
    </div>
    </>
  );
};

const calculateWinner = (squares) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of winningCombinations) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default Xogame;
