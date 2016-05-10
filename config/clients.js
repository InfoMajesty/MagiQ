// config/addclient.js



// load up the user model
var mysql = require('mysql');
var dbconfig = require('./database');

// expose this function to our app using module.exports
module.exports.getClients = function(callback) {

    var connection = mysql.createConnection(dbconfig.connection);
    
    connection.query('USE ' + dbconfig.database);
    var retClients = [];



    connection.query("select * from " + dbconfig.clients_table,function(err, rows) {
        console.log("row count =" + rows.length);

        rows.forEach(function(row){
            //console.log("adding client " + row.clientname + " databasename = " + row.databasename);
            var client = {clientname:row.clientname,databasename:row.databasename};
            retClients.push(client);
        });
        callback(retClients);
        return;
    });
    //console.log("returning from add clients");
    return;
}
