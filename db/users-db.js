'use strict';

const faker = require('faker')

module.exports.generateUsers = () => {
  let users = [];
  for (let i = 0; i < 50; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let phoneNumber = faker.phone.phoneNumberFormat();
    let email = faker.internet.email();
    let addressStreet = faker.address.streetAddress();
    let addressCity = faker.address.city();
    let addressState = faker.address.state();
    let addressZip = faker.address.zipCode();
    let lastLogin = "20017-04-25T23:59:03.244Z"
    let startDate = "2006-04-25T23:59:03.244Z"

    users.push({
      "first_name": firstName,
      "last_name": lastName,
      "start_date": startDate,
      "last_login": lastLogin, 
      "phone": phoneNumber,
      "email": email,
      "street_address": addressStreet,
      "city": addressCity,
      "state": addressState,
      "postal_code": addressZip
    });
  }

  return users;
}