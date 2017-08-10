//stores the info for passwords
var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({

	host: "localhost",
	port: 3306,
	//username
	user:"root",
	//ENTER YOUR PASSWORD HERE 
	password: "",
	database: "bamazon_db"

	});

connection.connect(function(error){
	if (error) throw error;
	whatToBuy();
	readAllProducts();
	
});


//asks the user what they want to buy and how many through the product table/prompt array 

function whatToBuy(){
	inquirer.prompt([
			{
				name:"item",
				type:"list",
				message: "Select the name of the item you would like to purchase:", 
				choices: [
				"purple wig",
				"round glasses",
				"red blazer",
				"black biker shorts",
				"red gown",
				"silver ring", 
				"princess puppet",
				"pink wig",
				"stuffed cow",
				"sports car"
		
			]},
			{
				name:"itemNum",
				type:"input",
				message: "What is your item's ID?",
				validate: function(value){
					if(isNaN(value) === false){
						return true;
					}
					return false;
				}
			},

			{
				name:"amount",
				type:"input",
				message: "How many would you like to buy?",
				validate: function(value){
					if(isNaN(value) === false){
						return true;
					}
					return false;
				}
				
			}
			// ,
			// // { //optional confirm feature 
			// 	type: "confirm",
			// 	message: "Is that your final amount?",
			// 	name:"confirm",
			// 	default: true
			// }
		])
		.then(function(response){
			//double check to see what the response confirms about the order 
			// console.log(response);
			// //name
			// console.log(response.item);
			// //item's id
			// console.log(response.itemNum);
			// //amount ordered
			// console.log(response.amount);
			
			//query to be sure the database has the item in stock 
			connection.query("SELECT stock_quantity FROM products WHERE item_id=" + response.itemNum, function (error, data){
				//now should read the stock_quantity of the item_id from above
				console.log(data);
				if (error) throw error;
				//if not an error, then see if the data from the query is greater than the response.amount
					if(data >= response.amount){
						console.log("You are in luck; enjoy your item!");
						//update the amount of product left in the stock_quantity column
						//query to update the database to make sure the amount of stock_quantity goes down by the response.amount
						connection.query("UPDATE products SET stock_quantity = stock_quantity -" + response.amount +" WHERE item_id=" + response.itemNum, function(error, data){
							if(error) throw error;
							//show the price to the customer for that item data here is an ok packet with affectedRows and messaage
							// console.log(data);
						
							//open another query to reveal the price for the item-- have to multiply by the response.amount to get total price
							connection.query("SELECT price FROM products WHERE item_id=" + response.itemNum, function(error, data){
								// console.log(JSON.stringify(data));
								//console.log(JSON.parse(data));
								if(error) throw error;							
									//data come from the rowdatapacket array/objects to give me the price for that response.itemNum 
									newPrice = data[0].price;
									totalPrice = response.amount * newPrice;
									console.log("You ordered: " + response.amount);
									console.log("Your total is: $" + totalPrice);
								console.log("Thank you for using Bamazon!");
								})
							})
					}	
					else
					{
						console.log("There was not enough stock; please try your purchase again with another item.");
					}

				})
			
		});
}


//reads all the products in the database
function readAllProducts(){
	connection.query("SELECT *FROM products ", function (error, result){
		if(error) throw error;
		console.log("\nCheck out the newest additions to the Bamazon catalogue below:");
		//if no error show the products
		console.log(result);
		// connection.end();
	});
}



////////RESOURCES
//https://stackoverflow.com/questions/22348705/best-way-to-store-db-config-in-node-js-express-app
//https://www.periscopedata.com/blog/how-to-format-numbers-as-currency-in-postgres-mysql-and-redshift.html
//https://www.mysqldatatypes.com/#numeric
//http://markdownlivepreview.com/