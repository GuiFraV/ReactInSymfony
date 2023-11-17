// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './components/TodoList/TodoList';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import './styles/app.css';

class App extends React.Component {

     handleAddTodo = (newTodo) => {
        // Logic to add the new todo (e.g., API call to the backend)
        console.log(newTodo); // For now, just log it to the console
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
