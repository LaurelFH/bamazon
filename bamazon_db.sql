/*CREATE DATABASE IF NOT exists bamazon_db;*/
DROP DATABASE if exists bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE IF NOT exists products(

	item_id INT auto_increment NOT NULL,
	product_name VARCHAR(50) NOT NULL unique,
	department_name VARCHAR (50) NOT NULL, 
	price DECIMAL (10, 2) NOT NULL,
	stock_quantity INT (10) NOT NULL,
	primary key (item_id)

);

/*inserting mock values into the table*/
 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES("purple wig", "beauty", 25.00, 3);

 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES("round glasses", "accessories", 10.00, 5);
 
INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES("red blazer", "clothing", 30.00, 6);
 
 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES("black biker shorts", "clothing", 15.00, 2);

 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES("red gown", "clothing", 120.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES("silver ring", "accessories", 200.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES("princess puppet", "toy", 50.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES("pink wig", "beauty", 75.00, 2);

 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES("stuffed cow", "toy", 5.00, 1);

 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES("sports car", "toy", 500.00, 3);


SELECT * FROM bamazon_db;