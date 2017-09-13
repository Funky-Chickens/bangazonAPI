'use strict';

const faker = require('faker')

module.exports.generateComputers = () => {
  let computers = [];
  for (let i = 0; i < 50; i++) {
      
    let decomissionDate = "20017-04-25T23:59:03.244Z"
    let purchaseDate = "2006-04-25T23:59:03.244Z"

    computers.push({
      "purchase_date": purchaseDate,
      "decomission_date": decomissionDate
    });
  }

  return computers;
}