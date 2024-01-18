-- init.sql

-- Create the database
CREATE DATABASE pern_todo_database;

-- Connect to the database
\c pern_todo_database;

-- Create the 'todos' table
CREATE TABLE IF NOT EXISTS todos (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
