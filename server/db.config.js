require("dotenv").config();
const { Pool } = require("pg");

const database = process.env.PSQL_NAME;

const connectionString = `postgresql://${process.env.PSQL_USER}:${process.env.PSQL_PASSWORD}@${process.env.PSQL_HOST}:${process.env.PSQL_PORT}/${database}`;

const pool = new Pool({
  connectionString: connectionString,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end(),
};