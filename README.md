# Dogshouseservice REST API

This is a sample REST API developed using Node.js and MS SQL database. The API allows querying and creating dogs in the database. It supports sorting, pagination, and includes error handling and data validation.
Getting Started

To get started with the Dogshouseservice REST API, follow the steps below:

Prerequisites

    - Node.js installed on your machine
    - MS SQL Server or SQL Server Express installed and running
    - Postman or a similar tool for making API requests

Installation

    - Clone the repository to your local machine.
    - Navigate to the project directory.
    - Run npm install to install the required dependencies.

Configuration

    - Rename the .env.example file to .env.
    - Open the .env file and provide the necessary values for your MS SQL database configuration. Update the DB_DATABASE, DB_USER, DB_PASSWORD, and DB_HOST variables according to your database setup.

Database Initialization

    - Open the database.js file in the config directory.
    - Update the dialect value to match your MS SQL Server version if necessary.
    - Run the database initialization script provided in the file to create the necessary table and populate it with the given data.

Starting the Server

    - Run npm start to start the Node.js server.
    - The server will be running on http://localhost:{port}, where {port} is the port number defined in the .env file.