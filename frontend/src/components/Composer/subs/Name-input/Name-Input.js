import React from 'react';
import './Name-Input.css';

const NameInput = () => {
    return (
        <>
            <label id="ToDoName" for="ToDoName">Название</label>
            <input
                name="ToDoName"
                className="NameInput"
                type="text"
                placeholder="Ваша заметка"
            />
        </>
    )
}

export default NameInput;