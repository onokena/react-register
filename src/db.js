const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgre',
    host: 'localhost',
    database: 'Reactregister',
    password: 'TEST',
    port: '5432',
});

module.exports = pool;
