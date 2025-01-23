import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* isolated component instance: PlayerComponentを繰り返すが、reactは各Playerを別のインスタンスとして扱う。 */}
            <Player initialName="Player 1" symbol="X"/>
            <Player initialName="Player 2" symbol="O"/>
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
