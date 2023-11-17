// TodoList.js
import React from 'react';
import TodoItem from '../TodoItem/TodoItem'; 

const TodoList = ({ todos }) => {
    return (
        <div>
            <h2>Todo List</h2>
            {todos.map(todo => (
                <TodoItem key={todo.id} title={todo.title} description={todo.description} />
            ))}
        </div>
    );
};

export default TodoList;
