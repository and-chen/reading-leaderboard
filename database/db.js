var { Pool } = require('pg');

var pool = new Pool( {    
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'admin',
    database: 'reading'
} );

module.exports = pool;