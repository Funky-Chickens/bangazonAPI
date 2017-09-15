 //delegate methods for querying database with promises here

'use strict';

let sqlite3 = require ('sqlite3').verbose();
let db = new sqlite3.Database('./db/bangazon.sqlite');

module.exports = {
    getUsers: () => {//method that returns a promise-- see .then in usersCtrl
        return new Promise( (resolve, reject) => {
            db.all(`SELECT * FROM users`, (err, userData)=>{
                    if (err) return reject(err);//if error, pass on to error handler
                    resolve(userData);
            });
        })
    },
    
    getOneUser: (id) => {
        return new Promise( (resolve, reject) => {//select user by user id and see user name instead of user id
            db.get(`SELECT *
	            FROM users
                WHERE user_id = ${id}`, (err, user)=>{
                if (err) return reject(err);
                resolve(user);
                });
        });
    },

    postUserObj:(userObj) => { //this userObj is the req.body passed from the usersCtrl
        return new Promise( (resolve, reject) => {
            db.run(`INSERT INTO users VALUES (null, "${userObj.first_name}", "${userObj.last_name}", "${userObj.start_date}", "${userObj.last_login}", "${userObj.street_address}", "${userObj.city}", "${userObj.state}", ${userObj.postal_code}, "${userObj.phone}", "${userObj.email}")`, (err, user)=>{
                if (err) return reject(err);
                resolve(user);
                });
        });
    },

    putUserObj: (id, userObj) => { //need whole userObj, but use the passed in ID from the req.params in order to access that number even after the object has been deleted from the DB
        return new Promise( (resolve, reject) => {
            db.run(`DELETE FROM users WHERE user_id=${id}`)
            db.run(`INSERT INTO users VALUES (${id}, "${userObj.first_name}", "${userObj.last_name}", "${userObj.start_date}", "${userObj.last_login}", "${userObj.street_address}", "${userObj.city}", "${userObj.state}", ${userObj.postal_code}, "${userObj.phone}", "${userObj.email}")`, (err, user)=>{
                if (err) return reject(err);
                resolve(user);
                });
        });
    },
    doesUserHaveOrders: (query) => { //tests the query sent from the controller for a boolean and passes in proper SQL parameters
        let isNotNull = query.active === 'true' ? "NOT NULL GROUP BY user_id" : "IS NULL";
        return new Promise( (resolve, reject) => {
            db.all(`SELECT * FROM users
            LEFT JOIN orders ON users.user_id = orders.buyer_id
            WHERE orders.buyer_id ${isNotNull}`, (err, userData)=>{
                if (err) return reject(err);//if error, pass on to error handler
                resolve(userData);
            });
        });
    },

//exporting methods with value of promises to be called and resolved in controller
}