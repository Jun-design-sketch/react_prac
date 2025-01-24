import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  // lifting state up:
  // Lift the state up to the closest ancestor component that has
  // access to all components that need to work with that state
  // AncestorがStateを管理し、Childへpropを介しstateChangeを知らせる。
  // 状態の一元管理。親から子へのシンプルフロー。同期問題を防ぐ。
  // 何故吊り上げるのか？上位層からコントロールし下へ吊るす方が楽だから
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updateTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/* isolated component instance: PlayerComponentを繰り返すが、reactは各Playerを別のインスタンスとして扱う。 */}
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer !== "X"}
          />
        </ol>
        {/* Crossed Stateを防止する */}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
