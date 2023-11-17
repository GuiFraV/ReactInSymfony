// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './components/TodoList/TodoList';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import './styles/app.css';

class App extends React.Component {

    handleAddTodo = async (newTodo) => {
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

    render() {
        const todos = [
            { id: 1, title: 'First Todo', description: 'Some Description...' },
            { id: 2, title: 'Second Todo', description: 'Another Description...' },
            // Add more todos as needed
        ];

        return (
            <div>
                <h1>Hello, World React!</h1>
                <AddTodoForm onAddTodo={this.handleAddTodo} />
                <TodoList todos={todos} />
            </div>
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
