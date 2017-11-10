const faker = require('faker');

module.exports = {
  async up(queryInterface) {
    const candidateIds = (await queryInterface.select(null, 'Candidates', { attributes: ['id'] }))
      .map(candidate => candidate.id);
    const proposalsBulkInsertPromises = candidateIds.map((candidateId) => {
      const quantity = faker.random.number({ min: 1, max: 20 });
      const proposalsData = [];

        proposalsData.push({
          candidateId,
          title: "Derogación de la ley de aborto",
          description: "Derogar la ley 21.030 que regula la despenalización de la interrupción del embarazo en tres causales.",
          date: faker.date.past(),
          context: faker.lorem.sentence(),
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        proposalsData.push({
          candidateId,
          title: "Protección a denunciantes y víctimas de corrupción",
          description: "Modificar el sistema de protección al denunciante que es funcionario público contenido en el estatuto administrativo, y crear una ley que proteja e incentivos al denunciante y víctima de corrupción, que incluye el respectivo fortalecimiento de la Unidad de Anticorrupción del Ministerio Público, así como de otras instituciones que tiene rol persecutor o fiscalizador.",
          date: faker.date.past(),
          context: faker.lorem.sentence(),
          createdAt: new Date(),
          updatedAt: new Date(),
        });

        proposalsData.push({
          candidateId,
          title: "NEPOTISMO",
          description: "Crear ley que prohíba postular a cargos políticos a quienes tengan un vínculo de parentesco de al menos dos generaciones para evitar conflicto de intereses.",
          date: faker.date.past(),
          context: faker.lorem.sentence(),
          createdAt: new Date(),
          updatedAt: new Date(),
        });

        proposalsData.push({
          candidateId,
          title: "Definir estándar de accesibilidad a áreas verdes",
          description: "La disparidad comunal en metros cuadrados de área verde por habitante es abismante. A modo de ejemplo la brecha comunal en la Región Metropolitana reportada por SINIM es entre 0,4 y 14,4 m2 por habitante.",
          date: faker.date.past(),
          context: faker.lorem.sentence(),
          createdAt: new Date(),
          updatedAt: new Date(),
        });

        proposalsData.push({
          candidateId,
          title: "MERCADO Y CONSUMO RESPONSABLE CON EL MEDIOAMBIENTE",
          description: "En Chile no existe conciencia sobre el impacto negativo que generan los residuos en nuestro medioambiente cuando éstos son dispuestos incorrectamente.  Esto se ve reflejado en la precaria gestión de los residuos de parte de los Gobiernos Locales, junto a la poca educación y conciencia medioambiental de los mismos ciudadanos.\r\n\r\nEl problema que se pretende solucionar: CONTAMINACIÓN AMBIENTAL Y CIUDADES SUCIAS\r\nEl desafío a abordar es: GESTIÓN INTEGRAL DE RESIDUOS",
          date: faker.date.past(),
          context: faker.lorem.sentence(),
          createdAt: new Date(),
          updatedAt: new Date(),
        });

      return queryInterface.bulkInsert('Proposals', proposalsData);
    });
    return Promise.all(proposalsBulkInsertPromises);
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('Proposals', null, {});
  },
};
