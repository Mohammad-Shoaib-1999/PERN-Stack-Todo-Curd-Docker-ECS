-- Create a table for the database
CREATE DATABASE perntodo;
-- CREATE TABLE public.todos


-- Create Users Table
-- CREATE TABLE IF NOT EXISTS users (
--     user_id SERIAL PRIMARY KEY,
--     username VARCHAR(50) NOT NULL,
--     email VARCHAR(100) NOT NULL,
--     password_hash VARCHAR(100) NOT NULL
-- );

-- Create Lists Table
-- CREATE TABLE IF NOT EXISTS lists (
--     list_id SERIAL PRIMARY KEY,
--     user_id INT REFERENCES users(user_id),
--     list_name VARCHAR(100) NOT NULL
-- );

-- Create Todo Table
-- CREATE TABLE IF NOT EXISTS todos (
--     todo_id SERIAL PRIMARY KEY,
--     -- list_id INT REFERENCES lists(list_id),
--     -- todo_name VARCHAR(255) NOT NULL,
--     description VARCHAR(255),
--     -- priority VARCHAR(20),
--     -- due_date DATE,
--     -- completed BOOLEAN DEFAULT false
-- );
CREATE TABLE IF NOT EXISTS todos (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
);

-- Create Attachments Table
-- CREATE TABLE IF NOT EXISTS attachments (
--     attachment_id SERIAL PRIMARY KEY,
--     task_id INT REFERENCES tasks(task_id),
--     file_name VARCHAR(255) NOT NULL,
--     file_path VARCHAR(255) NOT NULL
-- );

-- Create Tags Table
-- CREATE TABLE IF NOT EXISTS tags (
--     tag_id SERIAL PRIMARY KEY,
--     tag_name VARCHAR(50) NOT NULL
-- );

-- Create TaskTags Table (Many-to-Many relationship between tasks and tags)
-- CREATE TABLE IF NOT EXISTS task_tags (
--     task_id INT REFERENCES tasks(task_id),
--     tag_id INT REFERENCES tags(tag_id),
--     PRIMARY KEY (task_id, tag_id)
-- );

-- Create Collaborators Table
-- CREATE TABLE IF NOT EXISTS collaborators (
--     list_id INT REFERENCES lists(list_id),
--     user_id INT REFERENCES users(user_id),
--     permission_level VARCHAR(20) NOT NULL,
--     PRIMARY KEY (list_id, user_id)
-- );

-- Create TaskHistory Table
-- CREATE TABLE IF NOT EXISTS task_history (
--     task_id INT REFERENCES tasks(task_id),
--     completion_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- Create Notification Table
-- CREATE TABLE IF NOT EXISTS notifications (
--     notification_id SERIAL PRIMARY KEY,
--     user_id INT REFERENCES users(user_id),
--     message TEXT NOT NULL,
--     is_read BOOLEAN DEFAULT false,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );






-- (
--     todo_id SERIAL PRIMARY KEY,
--     description VARCHAR(255) NOT NULL,
--     PRIMARY KEY (product_id)
-- );

-- -- Seed data for the todos table
-- INSERT INTO public.todos (product_id, name, price, description) VALUES (1, 'Product 1', 9.00, 'Product 1 description.');
-- INSERT INTO public.todos (product_id, name, price, description) VALUES (2, 'Product 2', 7.19, 'Product 2 description.');
-- INSERT INTO public.todos (product_id, name, price, description) VALUES (3, 'Product 3', 9.29, 'Product 3 description.');
-- INSERT INTO public.todos (product_id, name, price, description) VALUES (4, 'Product 4', 6.45, 'Product 4 description.');

