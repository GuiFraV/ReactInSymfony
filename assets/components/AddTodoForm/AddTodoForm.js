import React, { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Call the onAddTodo function passed as a prop with the new todo's data
        onAddTodo({
            title,
            description
        });

        // Reset the form fields
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo-form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodoForm;
