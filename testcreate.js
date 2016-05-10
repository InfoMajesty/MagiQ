var clients = require('./config/clients');
clients.getClients(function(data){
console.log(JSON.stringify(data));});
