'use strict';

const faker = require('faker')

module.exports.generateDepartments = () => {
  let departments = [];

  for (let i = 1; i < 20; i++) {//20 departments total
    let dept_name = faker.commerce.department();
    let department_id = i;
    let supervisor = i*2; //to avoid duplicates
    let budget = faker.finance.amount();

    departments.push({
      "dept_name": dept_name,
      "department_id": department_id,
      "supervisor": supervisor,
      "budget": budget
    });
  }
  return departments;
}