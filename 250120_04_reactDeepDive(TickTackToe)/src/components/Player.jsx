import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function setEditing() {
    setIsEditing(!isEditing);
  }

  return (
    <li>
      <span className="player"></span>
      {isEditing ? (
        <>
          <input type="text"></input>
        </>
      ) : (
        <>
          <span className="player-name">{name}</span>
        </>
      )}
      <span className="player-symbol">{symbol}</span>
      <button onClick={setEditing}>Edit</button>
    </li>
  );
}
