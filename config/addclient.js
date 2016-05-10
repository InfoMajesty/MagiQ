// config/addclient.js



// load up the user model
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./database');

// expose this function to our app using module.exports
module.exports.add = function(clientname, databasename, username, password) {

	console.log("adding client with clientname = " + clientname + " databasename =  " + databasename + " username = " + username + " password = " + password);
	var connection = mysql.createConnection(dbconfig.connection);
	connection.query('USE ' + dbconfig.database);

	var insertQuery = "INSERT INTO clients ( clientname, databasename ) values (?,?)";

	connection.query(insertQuery,[clientname, databasename],function(err, rows) {
		console.log("Inserted a record in clients table");
		return;
	});

	/*
	connection.query('CREATE DATABASE ' + databasename);
	connection.query('\
	CREATE TABLE `' + databasename + '`.`' + dbconfig.users_table + '` ( \
	    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
	    `username` VARCHAR(20) NOT NULL, \
	    `password` CHAR(60) NOT NULL, \
		PRIMARY KEY (`id`), \
	    UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
	    UNIQUE INDEX `username_UNIQUE` (`username` ASC) \
	)');
	connection.query('USE ' + databasename);
	var newUserMysql = {
                        username: username,
                        password: bcrypt.hashSync(password, null, null)  // use the generateHash function in our user model
                    };

	    var insertQuery = "INSERT INTO users ( username, password ) values (?,?)";

	    connection.query(insertQuery,[newUserMysql.username, newUserMysql.password],function(err, rows) {
		newUserMysql.id = rows.insertId;
		console.log("added record to users table " + rows.insertId);
		return newUserMysql;
	    });*/
		
    }
