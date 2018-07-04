const { Client } = require('pg')
const client = new Client({
    user: 'man',
    host: 'localhost',
    database: 'man',
    password: 'man',
    port: 5432,
});

client.connect();

client.query('delete from account where email like $1', ['%test.com'], (err, res) => {
    if (err) {
        console.error(err, res);
    } else {
        console.log('Deleted all user accounts');
    }
});


client.query('insert into account(id, email, name, password, email_verification_hash, active, deleted, email_verified) values($1, $2, $2, $3, $4, $5, $5, $5)', ['unregd', 'unverified@test.com', '', '1234567890123456789012345', false], (err, res) => {
    if (err) {
        console.error(err, res);
    } else {
        console.log('Inserted unverified user');
        client.end();
    }
});
