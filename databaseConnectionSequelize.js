const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = "mysql://b1854baf8e2287:09bef965@us-cdbr-east-03.cleardb.com/heroku_609ae5cb002c91c?reconnect=true"

const dbConfigLocal = "mysql://root:Password@localhost/lab_example"

let databaseConnectionString

if (is_heroku) {
    databaseConnectionString = dbConfigHeroku
} else {
    databaseConnectionString = dbConfigLocal
}

module.exports = databaseConnectionString