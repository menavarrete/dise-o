module.exports = function defineProposal(sequelize, DataTypes) {
  const Proposal = sequelize.define('Proposal', {
    candidateId :  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    title:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    date:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: DataTypes.TEXT,
    context:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Proposal.associate = function associate(models) {
    Proposal.belongsTo(models.Candidate, {foreignKey: 'candidateId'});
    Proposal.hasMany(models.Comment, { foreignKey: 'element' });
  };

  Proposal.findProposalsByCandidate = function findProposalsByCandidate(elementId) {
    return Proposal.findAll({
      where: {
        candidateId: elementId,
      },
      include: ['Candidate'],
    });
  }

  return Proposal;
};
