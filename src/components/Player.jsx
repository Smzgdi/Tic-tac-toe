import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setplayerName] = useState(initialName)
function handleEdit(){
    setIsEditing((editing) => !editing)
  
}

function handleChange(event){
  setplayerName(event.target.value)

}

let editablePlayerName = <span className="player-name">{playerName}</span>


// let buttonText = "Edit"

if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    // buttonText = "Save"
}

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
