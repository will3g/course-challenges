const express = require('express');

const mysql = require('mysql');
const mysqlConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'db_course_chalenges_mysql'
}
const mysqlConnection = mysql.createConnection(mysqlConfig);

const app = express();

let port = 3000;

mysqlConnection.query("CREATE TABLE IF NOT EXISTS people(id int auto_increment primary key, name varchar(255) not null);");

app.get('/', (req, res) => {
    mysqlConnection.query("INSERT INTO people(name) values('William')");
    mysqlConnection.query(
        "SELECT name FROM people;",
        function (err, result, fields) {
            if (err) throw err;
            let queryResult = result.map(item => `<h2>${item.name}</h2>`).join('')
            res.send(
                `<h1>Full Cycle Rocks!</h1><br/>${queryResult}`
            );
        }
    );
});

app.listen(port, () => {
    console.log(`Listennig in port ${port}`);
});
