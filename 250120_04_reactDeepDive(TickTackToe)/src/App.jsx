import Player from './components/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* isolated component instance: PlayerComponentを繰り返すが、reactは各Playerを別のインスタンスとして扱う。 */}
            <Player name="Player 1" symbol="X"/>
            <Player name="Player 2" symbol="O"/>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
