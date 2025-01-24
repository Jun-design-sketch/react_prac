import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    // NOT RECOMMENDED
    // setIsEditing(!isEditing);
    // というのも、reactは即時に変更を行うのではない。未来に行うためにスケジュールする
    // States updates are not performed instantly but as same point in the future
    // In most cases, those state updates of course still are excuted almost instantly
    // JSの非同期処理もそうだったが

    // PASS A FUNCTION
    setIsEditing((editing) => !editing);
    // 以前の状態に基づくstateをsetするなら関数を使うこと
  }

  function handleChange(event) {
    // キーが押される度にeventが来て、再度valueへsetする
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    // 普通にvalueにするとずっと値が上書きする。two-way binding
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player"></span>
      {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
