// generate training class data with Faker
'use strict';

const faker = require('faker');

module.exports.generateTraining = () => {
  let trainingProgs = [];

  for (let i = 0; i < 50; i++) {
    let progName = faker.lorem.words();
    let startDate = faker.date.past();
    let endDate = faker.date.future();
    let maxAttendees = faker.random.number({
      'min': 1,
      'max': 25
    });

    trainingProgs.push({
      "program_name": progName,
      "start_date": startDate,
      'end_date': endDate,
      'max_attendees': maxAttendees
    });
  }

  return trainingProgs;
}