import { useState } from "react";

const initGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initGameBoard);

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard) => {
            const updateBoard = [
                ...prevGameBoard.map((innerArray) => [...innerArray]),
            ];
            updateBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updateBoard;
        });

        onSelectSquare()
    };

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                                    {playSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
