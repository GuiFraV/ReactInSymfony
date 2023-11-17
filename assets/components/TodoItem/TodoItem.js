import React from 'react';

function TodoItem({ title, description }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default TodoItem;
