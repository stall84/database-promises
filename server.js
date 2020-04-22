
const config = {
    host: 'localhost',
    port: 5432,
    database: 'restaurant',
    user: 'postgres'
};

const pgp = require('pg-promise')();
const db = pgp(config);



db.query('SELECT * FROM restaurant')
    .then((results) => {
        results.forEach((row) => {
            console.log(row);
            console.log(row.id, row.name);
        })
    })
    .catch((err) => {
        console.error('There was an error, oops!' + err);
    })

    pgp.end();