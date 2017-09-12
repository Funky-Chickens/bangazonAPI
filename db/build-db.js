const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');

db.serialize(function(){

    //drop existing tables to get up-to-date info  -- not sure of order to put in
    db.run(`DROP TABLE IF EXISTS departments`);
    db.run(`DROP TABLE IF EXISTS productTypes`);
    db.run(`DROP TABLE IF EXISTS productOrders`);
    db.run(`DROP TABLE IF EXISTS products`);
    db.run(`DROP TABLE IF EXISTS orders`);
    db.run(`DROP TABLE IF EXISTS paymentOptions`);
    db.run(`DROP TABLE IF EXISTS employees`);
    db.run(`DROP TABLE IF EXISTS employeeTraining`);
    db.run(`DROP TABLE IF EXISTS training`);
    db.run(`DROP TABLE IF EXISTS computers`);
    db.run(`DROP TABLE IF EXISTS users`);

    db.run(`CREATE TABLE IF NOT EXISTS users(
        user_id INTEGER PRIMARY KEY NOT NULL,
        first_name TEXT UNIQUE NOT NULL,
        last_name TEXT UNIQUE NOT NULL,
        start_date TEXT NOT NULL,
        last_login TEXT NOT NULL,
        street_address TEXT NOT NULL,
        city TEXT NOT NULL,
        state TEXT NOT NULL,
        postal_code INTEGER NOT NULL,
        phoneNumber TEXT NOT NULL

    )`);

    db.run(`CREATE TABLE IF NOT EXISTS computers(
    computerId INTEGER PRIMARY KEY,
    datePurchased TEXT,
    dateDecom TEXT,
    employee_id INTEGER
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS training(
        trainProgId INTEGER PRIMARY KEY,
        trainProgName TEXT,
        trainProgStart TEXT,
        trainProgEnd TEXT,
        maxAttendees INTEGER,
        employeesAttending INTEGER,
        employeesCompleted INTEGER
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS employeeTraining(
        empTrainId INTEGER PRIMARY KEY,
        employee_id INTEGER,
        trainProgId INTEGER,
        complete INTEGER
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS employees(
        employeeId INTEGER PRIMARY KEY,
        department_id INTEGER,
        employeeName TEXT,
        empSupervisor INTEGER
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
        price REAL NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS productOrders(
        order_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        line_item_id INTEGER PRIMARY KEY NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS productTypes(
        type_id INTEGER PRIMARY KEY NOT NULL,
        label TEXT NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS departments(
        departmentId INTEGER PRIMARY KEY,
        supervisor INTEGER,
        departmentName TEXT,
        budget REAL
    )`);
});