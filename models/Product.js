'use strict';

let sqlite3 = require ('sqlite3').verbose();
let db = new sqlite3.Database('./db/bangazon.sqlite');

module.exports ={
    getProducts:()=>{//method that returns a promise-- see .then in productsCtrl
        return new Promise((resolve, reject)=>{
            db.all(`SELECT * FROM products`, (err, prodData)=>{
                    if (err) return reject(err);//if error, pass on to error handler
                    resolve(prodData);
            });
        })
    },
    getOneProduct:(id)=>{
        return new Promise((resolve, reject)=>{//select product by product id and see a single product 
            db.get(`SELECT *
	            FROM products
                WHERE product_id = ${id}`, (err, product)=>{
                if (err) return reject(err);
                resolve(product);
                });
        });
    },

    postprodObj:(prodObj)=>{ //this prodObj is the req.body passed from the productsCtrl
        return new Promise((resolve, reject)=>{
            db.run(`INSERT INTO products VALUES (null, ${prodObj.type_id}, ${prodObj.seller_id}, 
                "${prodObj.product_name}", "${prodObj.description}", ${prodObj.quantity_avail}, ${prodObj.price})`, (err, product)=>{
                if (err) return reject(err);
                resolve(product);
                });
        });
    },

    deleteOneProduct:(id)=>{
        return new Promise((resolve, reject)=>{//select product by product id and delete a single product 
            db.run(`DELETE 
	            FROM products
                WHERE product_id = ${id}`, (err, product)=>{
                if (err) return reject(err);
                resolve(product);
                });
        });
    },

    putProduct:(id, prodObj) => { //need whole userObj, but use the passed in ID from the req.params in order to access that number even after the object has been deleted from the DB
        return new Promise( (resolve, reject) => {
            db.run(`UPDATE products SET 
                    type_id = ${prodObj.type_id}, 
                    seller_id = ${prodObj.seller_id}, 
                    product_name = "${prodObj.product_name}", 
                    description = "${prodObj.description}", 
                    quantity_avail = ${prodObj.quantity_avail}, 
                    price = ${prodObj.price} 
                    WHERE product_id = ${id}`, (err, product)=>{
                if (err) return reject(err);
                resolve(product);
                });
        });
    }

//post, put, patch, delete (whatever's required) also here for user
//exporting methods with value of promises to be called and resolved in controller
}