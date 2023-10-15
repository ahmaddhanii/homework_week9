var Pool = require('pg').Pool;
var pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'homework_week9',
  password: 'dhaniahmad',
  port: 5432,
});

module.exports = pool;