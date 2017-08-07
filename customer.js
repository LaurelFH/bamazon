//requires mysql npm and inquirer

var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = require('./key.js');


//set up the connection to mySQL
// connection.connect(function(error) {
//     if (error) {
//         console.log("there was a problem with your connection" + error);
//     } else {
//         console.log("connected as id: " + connection.threadId);
//         console.log("You are connected to Bamazon as a customer!");
//     }
// });

connection.connect(function(error){
	if (error) throw error;
	console.log("connected as id: " + connection.threadId);
});







//export/connect the pages so that manager.js function info can be called from here 