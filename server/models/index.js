'use strict';

// Import required modules
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');

// Get the base name of the current file
const basename = path.basename(__filename);

// Determine the environment (development, production, etc.)
const env = process.env.NODE_ENV || 'development';

// Load the database configuration from config.json based on the environment
const config = require(__dirname + '/../config/config.json')[env];

// Create an empty object to store Sequelize models
const db = {};

// Set up Sequelize connection based on the configuration
let sequelize;
if (config.use_env_variable) {
  // If an environment variable is specified, use it for database connection
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // If no environment variable, use the configuration parameters directly
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Authenticate the connection to the database
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(error => {
    console.error('Unable to connect to the database');
  });

// Read all files in the current directory
fs
  .readdirSync(__dirname)
  // Filter out files that start with a dot, match the base name, end with '.js', and don't contain '.test.js'
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  // For each valid file, import the model and associate it with Sequelize
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Associate all models if they have an 'associate' function
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Attach the sequelize instance and Sequelize library to the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Export the db object (with Sequelize models and configuration)
module.exports = db;
