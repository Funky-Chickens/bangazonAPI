
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
- In either your browser or Postman, go to `localhost:8080/bangazonAPI/v1/users` (this will automatically get a list of users in JSON format).  It will be an array of users in the following format (one user shown):  
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
- To access just one single user, go to `localhost:8080/bangazonAPI/v1/users/[unique_user_id]`

#### POST
- To `POST` to users, set Postman to "POST" and set the body to raw, type to JSON. Input your JSON object and send.

#### PUT
- To `PUT`(or update) a user's information, go to `localhost:8080/bangazonAPI/v1/users/[unique_user_id]`, set Postman to "PUT" and set the body to raw, type to JSON. Input your updated JSON object and send.

_____________________________________________

### To access the 'products' resource
- run ```npm run db:reset``` to create the database
- run ```npm start``` 
- open up a browser window to use with testing the "gets" below
#### GET all
- test get all product by entering this url:
    localhost:8080/bangazonAPI/v1/products
    
#### GET one
- test get one product by entering this url:
    localhost:8080/bangazonAPI/v1/products/[id](product id you want to find)
    
#### DELETE
- open POSTMAN app in chrome
- set it to DELETE
- test deleting one product by entering this url:
    localhost:8080/bangazonAPI/v1/products/[id](product id you want to delete)
- send request

#### POST
- open POSTMAN app in chrome
- set it to POST
- test post a product by entering this url:
   localhost:8080/bangazonAPI/v1/products
- make sure to set the body to JSON format
- insert an object to post with the properties listed in the database and the information you wish to 
   post
- send request

#### PUT
- open POSTMAN app in chrome
- set it to PUT
- put a product by entering this url:
   localhost:8080/bangazonAPI/v1/products/[id](product id you want to edit)
- make sure to set the body to JSON format
- insert an object to post with the properties listed in the database and the information you wish to 
   post
- make sure there is no ID
- send request
