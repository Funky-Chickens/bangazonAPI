//delegate methods for querying database with promises here

'use strict';

let sqlite3 = require ('sqlite3').verbose();
let db = new sqlite3.Database('./db/bangazon.sqlite');

module.exports ={
    getUsers:()=>{//method that returns a promise-- see .then in showCtrl
        return new Promise((resolve, reject)=>{
            db.all(`SELECT * FROM users`, (err, userData)=>{
                    if (err) return reject(err);//if error, pass on to error handler
                    resolve(userData);
            });
        })
    },
    getOneUser:(id)=>{
        return new Promise((resolve, reject)=>{//select show using show id and see director name instead of dir id
            db.get(`SELECT *
	            FROM users
                WHERE user_id = ${id}`, (err, user)=>{
                if (err) return reject(err);
                resolve(user);
                });
        });
    }

//post, put, patch, delete (whatever's required) also here for user
//exporting methods with value of promises to be called and resolved in controller
}