 //delegate methods for querying database with promises here because this is the model we're using

 //exporting methods getPayments, getOnePayment, postPayment with value of promises to be
 //called and resolved in payment options ctrl

 'use strict';

 let sqlite3 = require ('sqlite3').verbose();
 let db = new sqlite3.Database('./db/bangazon.sqlite');

module.exports ={
    getPayments:()=>{//method that returns a promise-- see .then in paymentOptionsCtrl
        return new Promise((resolve, reject)=>{
            db.all(`SELECT * FROM paymentOptions`, (err, pmtData)=>{
                    if (err) return reject(err);//if error, pass on to error handler
                    resolve(pmtData);
            });
        })
    },
    getOnePayment:(id)=>{
        return new Promise((resolve, reject)=>{//select paymentOption by payment_id
            db.get(`SELECT *
                FROM paymentOptions
                WHERE payment_id = ${id}`, (err, pmt)=>{
                if (err) return reject(err);
                resolve(pmt);
                });
        });
    },

    postPayment:(pmtObj) => { //this pmtObj is the req.body passed from the paymentOptionsCtrl
        return new Promise((resolve, reject)=>{
            db.run(`INSERT INTO paymentOptions
                VALUES (null, ${pmtObj.buyer_id}, "${pmtObj.payment_option_name}", ${pmtObj.account_number})`, (err, pmt)=>{
                if (err) return reject(err);
                resolve(pmt);
                });
        });
    },

    replacePayment:(id, pmtObj) =>{//same as payment object above with post, just replacing it
        //use id and payment object passed in to find object to replace and replace it with new values passed in in pmt object
        console.log ("paymentObj?", pmtObj);
        return new Promise((resolve, reject)=>{
            db.run(`UPDATE paymentOptions
            SET payment_id = ${id}, buyer_id = ${pmtObj.buyer_id}, payment_option_name = "${pmtObj.payment_option_name}", account_number =${pmtObj.account_number}
            WHERE payment_id = ${id}`, (err, payment) => {
                if (err) return reject(err);
                resolve(payment);
            });
        })
    },

    deletePayment:(id) => {
        return new Promise( (resolve, reject) => {
            db.run(`DELETE FROM paymentOptions WHERE payment_id = ${id}`, (err) => {
                if (err) return reject(err);
                resolve();
            });
        })
    }


 }