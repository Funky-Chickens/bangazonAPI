const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

module.exports = {
    getAll: () => {
        return new Promise( (resolve, reject) => {
            db.all(`SELECT * from productTypes`, (err, typeData) => {
                if(err) return reject(err);
                resolve(typeData);
            });
        });
    },
    getOne: (id) => {
        return new Promise( (resolve, reject) => {
            db.get(`SELECT * FROM productTypes WHERE type_id = ${id}`, (err, productType) => {
                if (err) return reject(err);
                resolve(productType)
            });
        });
    },
    addType: (prodType) => {
        return new Promise( (resolve, reject) => {
            db.run(`INSERT INTO productTypes VALUES (null, "${prodType.label}")`, (err, pType) => {
                if (err) return reject(err);
                resolve(pType);
            });
        });
    }
}