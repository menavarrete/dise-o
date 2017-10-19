const faker = require('faker');

module.exports = {
  async up(queryInterface) {
    const candidateIds = (await queryInterface.select(null, 'candidates', { attributes: ['id'] }))
      .map(candidate => candidate.id);
    const initiativesBulkInsertPromises = candidateIds.map((candidateId) => {
      const quantity = faker.random.number({ min: 1, max: 20 });
      const proposalsData = [];
      for (let i = 0; i < quantity; i += 1) {
        initiativesData.push({
          candidateId,
          title: faker.lorem.sentence(),
          description: faker.lorem.sentences(10),
          date: faker.date.past(),
          context: faker.lorem.sentence(),
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
      return queryInterface.bulkInsert('proposals', proposalsData);
    });
    return Promise.all(initiativesBulkInsertPromises);
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('proposals', null, {});
  },
};
