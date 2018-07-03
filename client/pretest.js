const { Client } = require('pg')
const client = new Client({
    user: 'man',
    host: 'localhost',
    database: 'man',
    password: 'man',
    port: 5432,
});

client.connect();

console.log('Initialize database for tests...');

client.query('delete from account where email like $1', ['%test.com'], (err, res) => {
    if (err) {
        console.error(err, res);
    } else {
        console.log('Deleted all user accounts');
    }
    client.end();
});