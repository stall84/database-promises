
const config = {
    host: 'localhost',
    port: 5432,
    database: 'restaurant',
    user: 'postgres'
};

const pgp = require('pg-promise')();
const db = pgp(config);

let restaurant = {name: 'Jolly Rogers', distance: 1.45, stars: 2, category: 'Chumpfood', favorite_dish: 'Crackos (crack-tacos)', does_takeout: true, last_time_visited: '2020-04-23'};
// I initially tried to just insert the whole above object as a template literal (ie VALUES ${restuarant}) but got an error with just a closing right brace ']'.. the below method of verbosely 'dollaring' out every object key works though & I don't know why yet
let query = "INSERT INTO restaurant (name, distance, stars, category, favorite_dish, does_takeout, last_time_visited) VALUES (${name}, ${distance}, ${stars}, ${category}, ${favorite_dish}, ${does_takeout}, ${last_time_visited})";

/*db.query('SELECT * FROM restaurant')
    .then((results) => {
        results.forEach((row) => {
            console.log(row);
            console.log(row.id, row.name);
        })
    })
    .catch((err) => {
        console.error('There was an error, oops!' + err);
    })*/

    // below uses 'one' method to only return the one matching row 
/*db.one('SELECT * FROM restaurant WHERE id = 5')
    .then ((results) => {
        console.log(`Name of Establishment: ${results.name}, Restaurant Category: ${results.category}, User's Favorite Dish: ${results.favorite_dish}`);
    }).catch((e) => {
        console.error('Something went wrong' + e);
    });*/    
    
    // below uses a 'result' method to return the raw data of restaurants that meet certain criteria
/*db.result('SELECT *, name FROM restaurant WHERE stars >=4 GROUP BY id ORDER BY id')    
    .then((results) => {
        console.log(results);
    }).catch((error) => {
        console.error('Something has gone terribly wrong' + error);
    });*/

    // below queries the database to add/post a new restaurant row to our table using 'global' variables defined at top of script
/*db.result(query, restaurant)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.error('There was a horrible error onboard the USS db-result' + err);
    });*/
    
    // below deletes a duplicate row I created by using the 'update' method
    // interetingly this route did delete the restaurant row with ID 12, but also threw the catch error saying :"No data returned from query"
db.one('DELETE FROM restaurant WHERE id = 12')
    .then((results) => {
        console.log(results);
    }).catch((err) => {
        console.error('There was an error deleting the row: ' + err);    
    });

    pgp.end();