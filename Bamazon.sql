CREATE DATABASE bamazon_db;
USE Bamazon;

CREATE TABLE products (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	console VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock INTEGER(11) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO products (product_name, console, price, stock)
VALUES  ('Mario & Luigi: Paper Jam', '3DS', 39.99, 50),
		('Stardew Valley', 'PC', 11.99, 100),
		('Salt and Sanctuary', 'PS4', 59.99, 300),
		('Pokken Tournament', 'WiiU', 49.99, 400),
		('XCOM: Enemy Unknown', 'PSVita', 39.99, 500),
		('Hyrule Warriors Legends', '3DS', 39.99, 250),
		("Uncharted 4: A Thief's End", 'PS4', 59.99, 104),
		('Raiden V', 'XBO', 59.99, 200),
		('Edge of Nowhere', 'VR', 19.99, 704),
		('Tokyo Mirage Sessions #FE', 'WiiU', 49.99, 575),
		('Lost Sea', 'XBO', 59.99, 48),
		('Fallout Shelter', 'PC', 14.99, 150),
		('Etrian Odyssey V', '3DS', 39.99, 88),
		("Little King's Story", 'PC', 17.99, 120);
