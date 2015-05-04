var mysql = require('mysql');

var client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

var ignore = [mysql.ERROR_DB_CREATE_EXISTS,
              mysql.ERROR_TABLE_EXISTS_ERROR];

client.on('error', function (err) {
  if (ignore.indexOf(err.number) + 1) { return; }
	err ="oh poo no connection could be made to MYSQL, Fact: its pronounced my sequal.. to what exactly?";
	throw err;
});

client.query('CREATE DATABASE quotes');
client.query('USE quotes');

client.query('CREATE TABLE quotes.quotes (' +
             'id INT NOT NULL AUTO_INCREMENT,' +
             'author VARCHAR( 128 ) NOT NULL,' +
             'quote TEXT NOT NULL, PRIMARY KEY (  id )' +
             ')');

client.query('INSERT INTO  quotes.quotes (' +
              'author, quote) ' +
              'VALUES ("Bjarne Stroustrup", "Proof by analogy is fraud.");');
client.end();