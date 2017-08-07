CREATE DATABASE if not exists bamazon_db;
USE bamazon_db;
SELECT * from bamazon_db;



CREATE TABLE products(

item_id INT (10) auto_increment NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR (50) NOT NULL, 
price INT (10) NOT NULL,
stock_quantity INT (10) NOT NULL,
primary key (item_id)

);


 