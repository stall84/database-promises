
const config = {
    host: 'localhost',
    port: 5432,
    database: 'restaurant',
    user: 'MES'
};

const pgp = require('pg-promise');
const db = pgp(config);



console.log(db);