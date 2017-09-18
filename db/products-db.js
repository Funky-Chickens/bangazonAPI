// generate a bunch of products and types with Faker
'use strict';

const faker = require('faker');

module.exports.generateProdTypes = () => {
  let prodTypes = [];

  for (let i = 0; i < 12; i++) {
    let label = faker.commerce.department();
    
    prodTypes.push({
      label
    });
  }
  return prodTypes;
};

module.exports.generateProducts = () => {
  let products = [];

  for (let i = 0; i < 10; i++) {
    let description = faker.random.words();
    let price = faker.commerce.price();
    let name = faker.commerce.productName();
    let quantity = faker.random.number();
    let type_id = i%12 + 1;
    let seller_id = faker.random.number();


    products.push({
      description,
      price,
      name,
      quantity,
      type_id,
      seller_id
    });
  }
  return products;
};


// to get it into the DB we need to insert them into... 
//but then also each one needs to correlate to a dept number