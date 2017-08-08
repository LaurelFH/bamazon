//requires mysql npm and inquirer

var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = require('./key.js');

//this will be the final space for the functions, btu test them in key to start
//export/connect the pages so that manager.js function info can be called from here 
//function to prompt user with 2 messages
//first ask them the ID of what they would like to buy
//second message asks how many units of the product they want to buy







////////RESOURCES
//https://stackoverflow.com/questions/22348705/best-way-to-store-db-config-in-node-js-express-app
//https://www.periscopedata.com/blog/how-to-format-numbers-as-currency-in-postgres-mysql-and-redshift.html
//https://www.mysqldatatypes.com/#numeric