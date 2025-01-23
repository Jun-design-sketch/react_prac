import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

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

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required value={name}/>;
  }

  return (
    <li>
      <span className="player"></span>
        {playerName}
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
