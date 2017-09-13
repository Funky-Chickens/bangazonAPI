const faker = require('faker')

module.exports.generateEmployees = () => {
    let employees = [];

    for(let i = 0; i < 50; i++) {
        let department = Math.floor((Math.random() * 20) + 1);
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let hireDate = '2006-04-25T23:59:03.244Z';

        employees.push({
            "department": department,
            "first_name": firstName,
            "last_name": lastName,
            "hire_date": hireDate
        });
    };
    console.log(employees)
    return employees;
};