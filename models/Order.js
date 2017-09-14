 //delegate methods for querying database with promises here

'use strict';

let sqlite3 = require ('sqlite3').verbose();
let db = new sqlite3.Database('./db/bangazon.sqlite');

module.exports ={
    getOrders:()=>{//method that returns a promise-- see .then in ordersCtrl
        return new Promise((resolve, reject)=>{
            db.all(`SELECT * 
                    FROM orders
                    `, (err, orderData)=>{
                    if (err) return reject(err);//if error, pass on to error handler
                    resolve(orderData);
            });
        })
    },
    getOneOrder:(id)=>{
        return new Promise((resolve, reject)=>{//select order by order id and see order name
            db.get(`SELECT *
	            FROM orders
                WHERE order_id = ${id}
                LEFT JOIN productOrders ON orders.order_id = productOrders.order_id 
                LEFT JOIN products ON products.product_id = productOrders.product_id
                `, (err, order)=>{
                if (err) return reject(err);
                resolve(order);
                });
        });
    },

    postOrderObj:(orderObj) => { //this orderObj is the req.body passed from the ordersCtrl
        return new Promise((resolve, reject)=>{
            db.run(`INSERT INTO orders VALUES (null, "${orderObj.order_date}", ${orderObj.payment_type}, ${orderObj.buyer_id})`, (err, order)=>{
                if (err) return reject(err);
                resolve(order);
                });
        });
    }

//post, put, patch, delete (whatever's required) also here for order
//exporting methods with value of promises to be called and resolved in controller
}