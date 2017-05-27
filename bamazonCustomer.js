
var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 8809,
	user: 'root',
	password: 'yourPassword123',
	database: 'bamazon_db'
});

function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole number.';
	}
}

function UserPurchase() {
	inquirer.prompt([
		{
			type: 'input',
			name: 'id',
			message: 'Please enter the ID of the game you would like to purchase.',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many would you like?',
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {
		var id = input.id;
		var quantity = input.quantity;

		var queryString = 'SELECT * FROM products WHERE ?';

		connection.query(queryString, {id: item}, function(err, data) {
			if (err) throw err;

			if (data.length === 0) {
				console.log('ERROR: Invalid ID.');
				displayInventory();

			} else {
				var productData = data[0];

				if (quantity <= productData.stock) {
					console.log('The product is in stock! Placing order!');

					var updateQueryStr = 'UPDATE products SET stock = ' + (productData.stock - quantity) + ' WHERE id = ' + item;

					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Order Placed. The total = $' + productData.price * quantity);
						console.log("\n---------------------------------------------------------------------\n");

						connection.end();
					})
				} else {
					console.log("Sorry, we're out of that.");
					console.log('Modify your order.');
					console.log("\n---------------------------------------------------------------------\n");

					displayInventory();
				}
			}
		})
	})
}

function displayInventory() {
	queryString = 'SELECT * FROM products';

	connection.query(queryString, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');

		var gameInfo = '';
		for (var i = 0; i < data.length; i++) {
			gameInfo = '';
			gameInfo += 'ID: ' + data[i].id + '  //  ';
			gameInfo += 'Product Name: ' + data[i].product_name + '  //  ';
			gameInfo += 'Department: ' + data[i].department_name + '  //  ';
			gameInfo += 'Price: $' + data[i].price + '\n';

			console.log(gameInfo);
		}

	  	console.log("---------------------------------------------------------------------\n");
		UserPurchase();
	})
}

	function Bamazon() {
	displayInventory();
	}

	Bamazon();
