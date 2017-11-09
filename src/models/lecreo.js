module.exports = function defineLecreo(sequelize, DataTypes) {
  const Lecreo = sequelize.define('Lecreo', {
    ProposalId: DataTypes.INTEGER,
    ip: DataTypes.STRING,
    value: DataTypes.INTEGER,
  });
  Lecreo.associate = function associate(models) {
    Lecreo.belongsTo(models.Proposal, {foreignKey: 'ProposalId'});
    
  };

  Lecreo.findLecreoByIp = function findLecreoByIp(IP) {
    return Lecreo.findAll({
      where: {
        ip: IP,
      },
      include: ['Proposal'],
    });
  }

  Lecreo.howManyLecreo = function howManyLecreo(proposalId, Value) {
    return Lecreo.findAndCountAll({
      where: {
        ProposalId: proposalId,
        value: Value,
      },
    });
  };

  return Lecreo;
};