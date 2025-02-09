import { useState, useRef } from "react";

export default function Player() {
  // ref is value
  // just as state is value: import 'useRef'
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  // refは楽だけど、なぜrefだけ使ったらいけないか。。
  // refだけを使っていると、stateとは違ってrefの変化はreactの再renderを起こさない。
  // ただの参照なだけだ

  // つまり。。
  // State
  // componentの再実行を起こす
  // UIに早速反映されるべき値を扱うことに使用すべき
  // Refs
  // componentsの再実行を起こさない
  // DOMelementの直接アクセスに使用できる。
  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    // reactは宣言的なコードを書くこと。DOMを直接操作する方向ではない
    // DOM interactはreactにお任せすることが基本的な原則になる
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        {/* 宣言したrefを割り当てることで、該当要素にアクセスできる。 */}
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
