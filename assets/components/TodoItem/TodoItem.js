// TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);
    const [editedDescription, setEditedDescription] = useState(todo.description);

    const handleUpdate = () => {
        onUpdate({ ...todo, title: editedTitle, description: editedDescription });
        setIsEditing(false); // Turn off editing mode after update
    };

    return (
        <div className="todo-item">
            {isEditing ? (
                <div>
                    <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                    <textarea value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default TodoItem;
