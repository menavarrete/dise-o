module.exports = function defineLecreo(sequelize, DataTypes) {
  const Lecreo = sequelize.define('Lecreo', {
    ProposalId: DataTypes.INTEGER,
    ip: DataTypes.STRING,
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

  return Lecreo;
};