require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DEV_DB_USER,
    "password": process.env.DEV_DB_PASS,
    "database": process.env.DEV_DB_DB,
    "host": process.env.DEV_DB_HOST,
    "dialect": "postgres",
    "logging":false,
    "dialectOptions": {
        "ssl": {
            "require": true,
            "rejectUnauthorized": false
        }
    }

  },
  "test": {
    "username": process.env.TEST_DB_USER,
    "password": process.env.TEST_DB_PASS,
    "database": process.env.TEST_DB_DB,
    "host": process.env.TEST_DB_HOST,
    "port":process.env.TEST_DB_PORT,
    "dialect": "postgres",
    "logging":false
  },
  "prod": {
    "username": "postgres",
    "password": "postgres",
    "database": "orderapi_prod",
    "host": "localhost",
    "dialect": "postgres",
  }
}