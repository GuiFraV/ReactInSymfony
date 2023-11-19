// TodoList.js
import React from 'react';
import TodoItem from '../TodoItem/TodoItem'; 

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onUpdate={onUpdateTodo} 
                    onDelete={onDeleteTodo} 
                />
            ))}
        </div>
    );
};


export default TodoList;
