import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {

    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        setIsEditing(editing => !editing)
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit"

    if (isEditing) {
        editablePlayerName = <input onChange={handleChange} type="text" required defaultValue={playerName} />
        btnCaption = "Save"
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}