# Welcome to the Repo for Bamazon
----
Thank you for downloading this easy-to-use application 

## Getting Started with Bamazon ver. 1.0
----

Bamazon is an application that allows you to quickly place simple orders from your Node.JS terminal. Built using the tools MySQL, Node.JS and several npms and JavaScript, Bamazon is a great way to place small orders for individual items.  We embrace the concept of spontaneity, once the item's inventory is gone it is gone for good (this month). We are currently running our "Comiket Special"-- be among the first 100 customers to email us with the name of the anime based on the clues hidden in our productlist.csv and receive a free Bamazon sticker!

There are only a few simple steps to prepare to set-up Bamazon.

----
### Installation and Required Packages 

This repo includes the items you will need to get up and running with our application.  Follow the steps below to ensure a smooth  experience:

1. Clone the contents of this repo to your desktop location, be sure you have already downloaded MySQL Workbench as well as Node.JS
2. Make sure you have downloaded and/or updated the two required npm packages required to run Bamazon (information can be found in the included package.json file in the Bamazon App):
 * MySQL [Download the MySQL package](https://www.npmjs.com/package/mysql)
 * Inquirer [Download the Inquirer package](https://www.npmjs.com/package/inquirer)
3.  Update the **bamazonCustomer.js** file to include the password for your own localhost connection in MySQL Workbench;  **this is a crucial step to ensure that you are able to gain access to the Bamazon Database**.  Included in the repo is also a test file "productlist.csv" to populate this database with our most recent offerings if you choose to rely on MySQL's import external file feature.  

	![Updating Your Password](https://github.com/LaurelFH/bamazon/blob/master/password.png)


4. Once you confirm that the Bamazon Database is running in MySQL, you can call the "bamazonCustomer.js" file in node:
				```
				$node bamazonCustomer.js
				```
5.  From there, you will answer a series of questions based on the items you would like to purchase.  After the current catalogue is displayed, use the arrow keys to answer the first question about your item's name, then type in your item's item ID, a unique number tied to this item, and the quantity you would like to order.  
![Placing Your Orders](https://github.com/LaurelFH/bamazon/blob/master/placingorder.gif)

Please be aware that if no stock remains, we will be unable to complete your order.  

![No Stock Remains](https://github.com/LaurelFH/bamazon/blob/master/rejectedorder.gif)

----
## Upcoming Features 

Please look forward to our next release of the Bamazon app which will include: 
* increased functionality at both Manager and Supervisor-levels
