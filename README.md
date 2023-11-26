# React-Symfony Todo App

## Overview

This project is a to-do list application that combines a React frontend with a Symfony backend. The application allows users to create, view, update, and delete to-do items. This README outlines the key aspects of integrating React and Symfony and provides instructions for setting up and running the application.

## Technology Stack

- **Frontend**: React
- **Backend**: Symfony (PHP Framework)
- **Database**: [Specify Database]

## Features

- Create new to-do items.
- View a list of all to-do items.
- Update existing to-do items.
- Delete to-do items.

## Getting Started

### Prerequisites

- PHP [Specify Version]
- Composer
- Node.js and npm
- Symfony CLI
- [Any Other Prerequisites]

### Setting Up the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/GuiFraV/ReactInSymfony
   cd ReactInSymfony
    ```

2. **Install Symfony Dependencies**:
   ```bash
   composer install
    ```

3. **Setup the Database**:

- Configure your database connection in .env file.
- Run migrations:

   ```bash
   php bin/console doctrine:migrations:migrate
    ```

4. **Install Node Modules for React**:

- Navigate to the directory containing your React application and run:

   ```bash
   npm install
    ```

5. **Compile Assets with Webpack Encore**:

- In the root directory of the Symfony application, run:

   ```bash
   npm run encore dev
    ```

### Running the Application :

   ```symfony
   symfony server:start


