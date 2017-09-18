'use strict';

let sqlite3 = require ('sqlite3').verbose();
let db = new sqlite3.Database('./db/bangazon.sqlite');

let formatOrder = (order) => {
    // console.log("order", order);
    let formattedOrder = {
        "order_id": order[0].order_id,
        "order_date": order[0].order_date,
        "buyer_id": order[0].buyer_id,
        "products": []
    };
    order.forEach(orderItem => {
        formattedOrder.products.push({"product_id": orderItem.product_id, "name": orderItem.product_name, "price": orderItem.price, "quantity": orderItem.quantity_avail, "line_item_id": orderItem.line_item_id});
    })
    return formattedOrder
}

let deleteNoProdOrders = (id) => {
        return new Promise((resolve, reject)=>{
            db.all(`SELECT * FROM productOrders WHERE line_item_id = ${id}`, (err, lineId)=> {
                if (err) return reject(err);
                if (lineId[0]) {
                db.all(`SELECT * FROM productOrders WHERE order_id = ${lineId[0].order_id}
                    `, (err, orderData)=>{
                    if (err) return reject(err);//if error, pass on to error handler
                    if (orderData.length < 1) {
                        let deleteOrderId = parseInt(lineId[0].order_id)
                        db.run(`DELETE FROM orders WHERE order_id = ${deleteOrderId}`, (err, order)=>{
                            if (err) return reject(err);
                        });
                            }
                            else {
                                resolve("ELSE");
                            }
                    });
                }
            })
            resolve();
      
        })
}


module.exports = {
    getOrders:() => {//method that returns a promise-- see .then in ordersCtrl
        return new Promise( (resolve, reject) => {

            db.all(`SELECT * 
                    FROM orders`, (err, orderData) => {
                    if (err) return reject(err);//if error, pass on to error handler
                    resolve(orderData);
            });
        });
    },
    getOneOrder:(id) => {
        return new Promise( (resolve, reject) => {//select order by order id and see order name
            db.all(`SELECT *
	            FROM orders
                LEFT JOIN productOrders ON orders.order_id = productOrders.order_id 
                LEFT JOIN products ON products.product_id = productOrders.product_id
                WHERE orders.order_id = ${id}`, (err, order) => {
                    console.log(order);
                    if (err) return reject(err);
                    if (order.length) resolve(formatOrder(order));
                    else return reject("No such ID");
                });
        });
    },

    postOrderObj:(orderObj) => { //this orderObj is the req.body passed from the ordersCtrl which must have a product id on it as well, for the join table
        return new Promise( (resolve, reject) => {
            db.run(`INSERT INTO orders VALUES (null, "${orderObj.order_date}", null, ${orderObj.buyer_id})`, 
                function () { //have to use word "function" because of the "this"
                //this db.run uses the property this.lastID which is able to get the PK from the row generated in the function for which this is a callback (the above). The null argument is for the PK of the line_item_id.
                    db.run(`INSERT INTO productOrders VALUES (${this.lastID}, 
                        ${orderObj.product_id}, null)`, (err, order) => {
                if (err) return reject(err);
                resolve(order);
                });
            });
        });
    },

    deleteOneOrder:(id) => {
        return new Promise( (resolve, reject) => {//select order by order id and delete a single order 
            db.run(`DELETE 
                FROM orders
                WHERE order_id = ${id}`, (err, order) => {
                    if (err) return reject(err);
                    resolve(order);
            });
            db.run(`DELETE
                FROM productOrders
                WHERE order_id = ${id}`, (err, prodOrder) => {
                    if (err) return reject(err);
                    resolve(prodOrder);
            });
        });
    },

//updates an existing order in the order table
//also especially for updating payment type to make the order complete!
    putOrder:(id, orderObj) => { //need whole orderObj, but use the passed in ID from the req.params in order to access that number even after the object has been deleted from the DB
        return new Promise( (resolve, reject) => {
            db.run(`UPDATE orders 
                SET order_date = "${orderObj.order_date}", payment_type = ${orderObj.payment_type}, buyer_id = ${orderObj.buyer_id}
                WHERE order_id = ${id}`
                , (err, order) => {
                if (err) return reject(err);
                resolve(order);
            });
        });
    },

//this function posts to the productOrder join table with an order id and product id, it does not effect the order table
    postProdOrderObj:(prodOrderObj) => { //this prodOrderObj is the req.body passed from the ordersCtrl
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO productOrders 
                VALUES (${prodOrderObj.order_id}, ${prodOrderObj.product_id}, null)`, (err, prodOrder) => {
                if (err) return reject(err);
                resolve(prodOrder);
            });
        });
    },

//deletes a line item from the productOrder join table using the line item id primary key. it does not affect the order table
    deleteOneProdOrder:(id) => {
        return new Promise( (resolve, reject) => {//select product order by product order id and delete a single product order 
            deleteNoProdOrders(id) //this checks to make sure the order has other products still on it -- if not, it deletes the order. This helper function is defined above near line 22.
            .then ( (data) => {
            db.run(`DELETE 
                FROM productOrders
                WHERE line_item_id = ${id}`, (err, prodOrder) => {
                if (err) return reject(err);
                resolve(prodOrder);
                });
            })

        });
    },
//returns all orders from the specified user
    getUsersOrders:(uid) => {
        return new Promise( (resolve, reject) => {
            db.all(`SELECT * 
            FROM orders 
            WHERE buyer_id = ${uid}`, (err, usersOrders) => {
                if (err) return reject(err);
                resolve(usersOrders);
            });
        });
    }
}