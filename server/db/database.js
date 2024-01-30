require("dotenv").config();
const Sequelize = require("sequelize");

const database = process.env.DB_NAME;

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${database}`;

const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
});

module.exports = sequelize;

