'use strict'    
const faker = require('faker');

module.exports.generatePaymentOptions = () => {
    let paymentOpts = [];
    let creditCards = ["MasterCard", "VISA", "American Express"];

    for (let i = 0; i < 100; i++) {
        let buyerId = Math.floor((Math.random() * 50) + 1);
        let paymentOptionName = creditCards[Math.floor((Math.random() * 3))];
        let accountNumber = faker.finance.account();

        paymentOpts.push({
            "buyer_id": buyerId,
            "payment_option_name": paymentOptionName,
            "account_number": accountNumber
        });
    }

    return paymentOpts;
}