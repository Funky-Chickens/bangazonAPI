// generate order data with Faker
'use strict';

const faker = require('faker');

module.exports.generateOrders = () => {
  let orders = [];

  for (let i = 0; i < 50; i++) {
    let orderDate = faker.date.past();
    let paymentType = faker.random.number({
      'min': 1,
      'max': 3
    });
    let buyerId = faker.random.number({
      'min': 1,
      'max': 50
    });

    orders.push({
      "order_date": orderDate,
      "payment_type": paymentType,
      "buyer_id": buyerId
    });
  }

  return orders;
}