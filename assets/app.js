// App.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './components/TodoList/TodoList';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import './styles/app.css';

const App = () => {

    const [todos, setTodos] = useState([]);

  
    const fetchTodos = async () => {
        try {
            const response = await fetch('http://localhost:8000/todo/list');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const todos = await response.json();
            setTodos(todos);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleAddTodo = async (newTodo) => {
        try {
            const response = await fetch('http://localhost:8000/todo/create', { // Update this URL to your Symfony API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result); // Or handle the response as needed
            // Optionally, update your state here to reflect the new todo item
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const handleUpdateTodo = async (updatedTodo) => {
        try {
        const response = await fetch(`http://localhost:8000/todo/update/${updatedTodo.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTodo)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
            this.fetchTodos(); // Refetch the updated todos list
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const handleDeleteTodo = async (todoId) => {
        try {
        const response = await fetch(`http://localhost:8000/todo/delete/${todoId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
            this.fetchTodos(); // Refetch the updated todos list
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return(
         <div>
            <h1>Hello, World React!</h1>
            <AddTodoForm onAddTodo={handleAddTodo} />
            <TodoList 
                todos={todos} 
                onUpdateTodo={handleUpdateTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
