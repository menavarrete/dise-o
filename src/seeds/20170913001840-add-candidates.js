const faker = require('faker');

module.exports = {
  up(queryInterface) {
    const candidatesData = [];
    for (let i = 0; i < 10; i += 1) {
      candidatesData.push({
        name: faker.name.firstName(),
        shortname: faker.name.firstName(),
        bio: faker.lorem.paragraph(),
        birthday: faker.date.past(),
        political_party: faker.name.jobTitle(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert('candidates', candidatesData);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('candidates', null, {});

  },
};
