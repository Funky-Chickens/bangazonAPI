# Bangazon API
This API is to allow developers to access the customers and products and related resources in order to GET, POST, PUT, and in some cases DELETE the relevant data.
## Getting Started
These instructions will get the API up and running on your local machine for testing purposes.
### Prerequisites
- download npm (and node.js) in order to install following packages (these will be installed when you have the package.json and run `npm install` after cloning the repo.
#### npm install the following:
- sqlite3 - to interface with the database
- faker - npm install faker to generate data for the fake database
- express
- body-parse
- dotenv
_______________________________________________
## To use the API
- Clone this repo into a directory of your choice
- Run `npm install` to install dependencies
- `npm run db:reset` in the command line to create and populate your database
- `npm start` on the command line to run the server and allow access
_______________________________________________
### To access the 'users' resource
#### GET
- `http://localhost:8080/bangazonAPI/v1/users` 
- Returns all user data in this format:
{
  "user_id": 3,
  "first_name": "Joana",
  "last_name": "Gutkowski",
  "start_date": "2006-04-25T23:59:03.244Z",
  "last_login": "20017-04-25T23:59:03.244Z",
  "street_address": "250 Erna Highway",
  "city": "Lake Lenora",
  "state": "Arizona",
  "postal_code": 78476,
  "phone": "437-034-6863",
  "email": "Aliya_Rodriguez73@gmail.com"
}
#### GET one
- `http://localhost:8080/bangazonAPI/v1/users/[unique_user_id]`
- Returns a single user by their unique user id
#### POST
- `http://localhost:8080/bangazonAPI/v1/users`
- Takes a JSON object in the format specified above
#### PUT
- `localhost:8080/bangazonAPI/v1/users/[unique_user_id]` 
- Updates a user's information, takes a JSON object in the format specified above.
#### GET all users with or without orders
- `http://localhost:8080/bangazonAPI/v1/users?active=true`
- Returns users with orders.
- `http://localhost:8080/bangazonAPI/v1/users?active=false`
- Returns users with no orders.
_____________________________________________
### To access the 'products' resource
#### GET all
- `http://localhost:8080/bangazonAPI/v1/products`
- Returns all products in the following format:
{
    "product_id": 5,
    "type_id": 6,
    "seller_id": 8,
    "product_name": "Rubber Balloon Underwear",
    "description": "Stretchy underwear that can be inflated, and doubles as a life preserver",
    "quantity_avail": 4,
    "price": 277
}
#### GET one
- `http://localhost:8080/bangazonAPI/v1/products/[unique_product_id]`
-Returns one product by its unique product id.
#### DELETE
- `http://localhost:8080/bangazonAPI/v1/products/[unique_product_id]`
- Deletes one product by its unique product id.
#### POST
- `http://localhost:8080/bangazonAPI/v1/products`
- Takes a JSON object in the format specified above.
#### PUT
- `http://localhost:8080/bangazonAPI/v1/products/[unique_product_id]`
- Takes a JSON object in the format specified above.
_________________________________________
## To access the "orders" resource
#### GET all
- `http://localhost:8080/bangazonAPI/v1/orders`
- Returns all products in the following format:
{  
  "order_id": 3,  
  "order_date": "Wed Apr 12 2017 13:21:28 GMT-0500 (Central Daylight Time)",  
  "payment_type": 4,  
  "buyer_id": 15
}
#### GET one
- `http://localhost:8080/bangazonAPI/v1/orders/[unique_order_id]`
- Returns one order by the unique order id.
#### POST
- `http://localhost:8080/bangazonAPI/v1/orders`
- Takes a JSON object in the format specified above.
#### PUT
- `http://localhost:8080/bangazonAPI/v1/orders/[unique_order_id]`
- Takes a JSON object in the format specified above.
#### DELETE
- `http://localhost:8080/bangazonAPI/v1/orders/[unique_order_id]`
- Deletes an order by its unique order id.
#### DELETE a product from an order
- `http://localhost:/bangazonAPI/v1/productorders/[line_item_id]`
- access the single order to see the line_item_id for that product.
- deletes a product from an order using the line item id.

- `http://localhost:/8080/bangazonAPI/v1/productorders`
- Posts a product to an existing order. Use the following format:
{    
  "order_id": 27,  
  "product_id":6  
}
__________________________________________
### To access the 'Payment Options' resource
#### GET all
- `http://localhost:8080/bangazonAPI/v1/payments`
- Returns all payment options in the following format:
{
    "payment_id": 1,
    "buyer_id": 20,
    "payment_option_name": "MasterCard",
    "account_number": 98420832
}
#### GET one
- `http://localhost:8080/bangazonAPI/v1/payments/[unique_payment_id]`
- Returns a payment type by its unique payment id.
#### DELETE
- `http://localhost:8080/bangazonAPI/v1/payments/[unique_payment_id]`
- Deletes a payment type using its unique payment id.
#### POST
- `http://localhost:8080/bangazonAPI/v1/payments`
- Takes a JSON object in the format specified above.
#### PUT
- `http://localhost:8080/bangazonAPI/v1/payments/[unique_payment_id]`
- Takes a JSON object in the format specified above.