import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  // lifting state up:
  // Lift the state up to the closest ancestor component that has
  // access to all components that need to work with that state
  // AncestorがStateを管理し、Childへpropを介しstateChangeを知らせる。
  // 状態の一元管理。親から子へのシンプルフロー。同期問題を防ぐ。
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players"className="highlight-player">
          {/* isolated component instance: PlayerComponentを繰り返すが、reactは各Playerを別のインスタンスとして扱う。 */}
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer !== 'X'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      LOG
    </main>
  );
}

export default App;
