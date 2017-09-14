# Bangazon API


# Developer Guidelines
## Before making a PR
- convert from tabs to spaces (using 4 spaces)
- check your styles - use airbnb styles for js (https://github.com/airbnb/javascript)
- weed out commented-out code and console logs
- add comments to explain confusing code


## Template for PR comments:  
### I made the following changes:  
- change  
- reason


### Steps to test:
- System config (if different)
- Added 3rd party libraries (if added)
- Command line utilities to run (nodemon etc.)
- UI actions to try and expected outcomes:
1. click "log in"
- should redirect to log in form

### (link to feature ticket)


## When reviewing PR:

+ Pull down the branch and run it on your machine, testing all the 'steps to test' in the PR.
+ Find and put github comment on commented out code and console logs.
+ If there is any piece of code you don't understand, put a comment question (on github).
+ If something looks 'off' style wise, check the airbnb style guide and put a note with that info.



# Actual ReadMe Below (work in progress):

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

## To use the API
- Clone this repo into a directory of your choice
- Run `npm install` to install dependencies
- `npm run db:reset` in the command line to create and populate your database
- `npm start` on the command line to run the server and allow access

### To access the 'users' resource
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

- To `POST` to users, set Postman to "POST" and set the body type to JSON. Input your JSON object and send.
- To access just one single user, go to `localhost:8080/bangazonAPI/v1/users/[unique_user_id]`

### To access the 'products' resource
- In either your browser or Postman, go to `localhost:8080/bangazonAPI/v1/products` (this will automatically get a list of products in JSON format).  It will be in the following format:

- To `POST` to products, set Postman to "POST" and set the body type to JSON. Input your JSON object and send.


