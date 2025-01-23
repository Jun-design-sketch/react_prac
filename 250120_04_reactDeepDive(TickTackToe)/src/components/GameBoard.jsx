import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // Objects & Arrays == referenceValues
  // therefore not mutate them directly; instead create a deep copy first
  // なぜそのまま値を変えてはならないか？
  // オブジェクトや配列はメモリ住所で覚えられるので
  // 住所の中にある何かを変えてもメモリ住所は同じ
  // 住所が同じだから変化が起きたとは思われずreactはstateの変更を引き起こせない。
  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // 今更のメモ
      // prevGameBoard は React から自動的に渡される。
      // React の state 更新は非同期的に行われるため、
      // setGameBoard にコールバック関数を渡すとき、
      // 最新の state (この場合は gameBoard) を引数として受け取れる。
      // この引数の名前は自由に決めて良い（prevGameBoard でなくてもOK）

      // const updatedBoard = [
      //   ...prevGameBoard.map((innerArray) => [...innerArray]),
      // ];
      const updatedBoard = structuredClone(prevGameBoard);

      updatedBoard[rowIndex][colIndex] = "X";
      return updatedBoard;
    });
  }

  return (
    <ol id="game-board">
      {/* indexはデータの内容ではなく位置と紐づいている… */}
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
