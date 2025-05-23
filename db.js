const mysql = require('mysql2');
require('dotenv').config();
const url = require('url');

const dbUrl = new URL(process.env.MYSQL_URL);

const connection = mysql.createConnection({
  host: dbUrl.hostname,
  user: dbUrl.username,
  password: dbUrl.password,
  port: dbUrl.port,
  database: dbUrl.pathname.split('/')[1],
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID', connection.threadId);
});

module.exports = connection;
