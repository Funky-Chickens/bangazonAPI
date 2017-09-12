const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');

const { generateProdTypes, generateProducts } = require('./products-db.js');
const { generateUsers } = require('./users-db');
const { generateDepartments } = require('./departments-db.js');
const { generateTraining } = require('./training-progs-db');
const { generateOrders } = require('./orders-db');

//faker data

db.serialize(function(){
    db.run(`DROP TABLE IF EXISTS users`);
    db.run(`DROP TABLE IF EXISTS computers`);
    db.run(`DROP TABLE IF EXISTS training`);
    db.run(`DROP TABLE IF EXISTS employeeTraining`);
    db.run(`DROP TABLE IF EXISTS employees`);
    db.run(`DROP TABLE IF EXISTS paymentOptions`);
    db.run(`DROP TABLE IF EXISTS orders`);
    db.run(`DROP TABLE IF EXISTS products`);
    db.run(`DROP TABLE IF EXISTS productOrders`);
    db.run(`DROP TABLE IF EXISTS productTypes`);
    db.run(`DROP TABLE IF EXISTS departments`);
    db.run(`DROP TABLE IF EXISTS computerEmployees `);

    db.run(`CREATE TABLE IF NOT EXISTS users(
        user_id INTEGER PRIMARY KEY NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        start_date TEXT NOT NULL,
        last_login TEXT NOT NULL,
        street_address TEXT NOT NULL,
        city TEXT NOT NULL,
        state TEXT NOT NULL,
        postal_code INTEGER NOT NULL,
        phone TEXT NOT NULL,
        email TEXT NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS computers(
        computer_id INTEGER PRIMARY KEY NOT NULL,
        purchase_date TEXT NOT NULL,
        decomission_date TEXT NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS training(
        program_id INTEGER PRIMARY KEY NOT NULL,
        program_name TEXT NOT NULL,
        start_date TEXT NOT NULL,
        end_date TEXT NOT NULL,
        max_attendees INTEGER NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS employeeTraining(
        empTrain_id INTEGER PRIMARY KEY NOT NULL,
        employee_id INTEGER NOT NULL,
        training_program_Id INTEGER NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS employees(
        employee_id INTEGER PRIMARY KEY NOT NULL,
        department INTEGER NOT NULL,
        name TEXT NOT NULL,
        hire_date TEXT NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS paymentOptions(
        payment_id INTEGER PRIMARY KEY NOT NULL,
        buyer_id INTEGER NOT NULL,
        payment_option_name TEXT NOT NULL,
        account_number INTEGER NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS orders(
        order_id INTEGER PRIMARY KEY NOT NULL,
        order_date TEXT NOT NULL,
        payment_type INTEGER,
        buyer_id INTEGER NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS products(
        product_id INTEGER PRIMARY KEY NOT NULL,
        type_id INTEGER NOT NULL,
        seller_id INTEGER NOT NULL,
        product_name TEXT NOT NULL,
        description TEXT NOT NULL,
        quantity_avail INTEGER NOT NULL,
        price REAL NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS productOrders(
        order_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        line_item_id INTEGER PRIMARY KEY NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS productTypes(
        type_id INTEGER PRIMARY KEY NOT NULL,
        label TEXT NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS departments(
        department_id INTEGER PRIMARY KEY NOT NULL,
        supervisor_id INTEGER NOT NULL,
        dept_name TEXT NOT NULL,
        budget REAL NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS computerEmployees(
        computer_user_id INTEGER PRIMARY KEY,
        employee_id INTEGER NOT NULL,
        issued_date TEXT NOT NULL,
        returned_date TEXT NOT NULL
    )`);

//run faker data for ORDERS
    let orders = generateOrders();
    orders.forEach((orderObj)  => {
        db.run(`INSERT INTO orders VALUES (null, "${orderObj.order_date}", ${orderObj.payment_type}, 
            ${orderObj.buyer_id})`);
    });

//run faker data for TRAINING table
    let training = generateTraining();
    training.forEach((trainingObj) => {
        db.run(`INSERT INTO training VALUES (null, "${trainingObj.program_name}", 
            "${trainingObj.start_date}", "${trainingObj.end_date}", ${trainingObj.max_attendees})`);
    });

//users
    let usersArray = generateUsers();
    usersArray.forEach( (userObj) => {
        db.run(`INSERT INTO users VALUES 
        ( null, "${userObj.first_name}", "${userObj.last_name}", "${userObj.start_date}", "${userObj.last_login}", "${userObj.street_address}", 
        "${userObj.city}", "${userObj.state}", ${userObj.postal_code}, "${userObj.phone}", "${userObj.email}")`);
    });

//product types
    let productTypesArray = generateProdTypes();
    productTypesArray.forEach( (prodTypeObj) => {
        db.run(`INSERT INTO productTypes VALUES (null, "${prodTypeObj.label}")`)
    });


// products
    let productsArray = generateProducts();
    productsArray.forEach( (prodObj) => {
        db.run(`INSERT INTO products VALUES 
        (null, ${prodObj.type_id}, ${prodObj.seller_id}, "${prodObj.name}", "${prodObj.description}", ${prodObj.quantity}, ${prodObj.price})`);
    });

// payment_types

// orders

//departments
   let departmentsArr = generateDepartments();
   departmentsArr.forEach((deptObj)=>{
        db.run(`INSERT INTO departments(dept_name, department_id, supervisor_id, budget)
        VALUES("${deptObj.dept_name}",${deptObj.department_id}, ${deptObj.supervisor},"${deptObj.budget}")`);
    });
//employees

//computers

//training programs

});

