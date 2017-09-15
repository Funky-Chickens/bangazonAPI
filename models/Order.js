  //delegate methods for querying database with promises here

'use strict';

let sqlite3 = require ('sqlite3').verbose();
let db = new sqlite3.Database('./db/bangazon.sqlite');

let formatOrder = (order) => {
    let formattedOrder = {
        "order_id": order[0].order_id,
        "order_date": order[0].order_date,
        "buyer_id": order[0].buyer_id,
        "products": []
    };
    order.forEach(orderItem => {
        formattedOrder.products.push({"product_id": orderItem.product_id, "name": orderItem.product_name, "price": orderItem.price, "quantity": orderItem.quantity_avail});
    })
    return formattedOrder
}

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
            db.all(`SELECT *
	            FROM orders
                LEFT JOIN productOrders ON orders.order_id = productOrders.order_id 
                LEFT JOIN products ON products.product_id = productOrders.product_id
                WHERE orders.order_id = ${id}
                `, (err, order)=>{
                    console.log(order);
                    if (err) return reject(err);
                    if (order.length) resolve(formatOrder(order));
                    else return reject("No such ID");
                });
        });
    },

    postOrderObj:(orderObj) => { //this orderObj is the req.body passed from the ordersCtrl
        return new Promise((resolve, reject)=>{
            db.run(`INSERT INTO orders VALUES (null, "${orderObj.order_date}", ${orderObj.payment_type} OR NULL, ${orderObj.buyer_id})`, (err, order)=>{
                if (err) return reject(err);
                resolve(order);
                });
        });
    },

    deleteOneOrder:(id)=>{
        return new Promise((resolve, reject)=>{//select order by order id and delete a single order 
            db.run(`DELETE 
                FROM orders
                WHERE order_id = ${id}`, (err, order)=>{
                if (err) return reject(err);
                resolve(order);
                });
        });
    },

    putOrder:(id, orderObj) => { //need whole orderObj, but use the passed in ID from the req.params in order to access that number even after the object has been deleted from the DB
        return new Promise( (resolve, reject) => {
            db.run(`DELETE FROM orders WHERE order_id=${id}`)
            db.run(`INSERT INTO orders VALUES (${id}, "${orderObj.order_date}", ${orderObj.payment_type}, ${orderObj.buyer_id})`
                , (err, order)=>{
                if (err) return reject(err);
                resolve(order);
                });
        });
    }

//post, put, patch, delete (whatever's required) also here for order
//exporting methods with value of promises to be called and resolved in controller
}