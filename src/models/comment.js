module.exports = function defineComment(sequelize, DataTypes) {
  const Comment = sequelize.define('Comment', {
    element: DataTypes.INTEGER,
    body: DataTypes.TEXT,
  });
  Comment.associate = function associate(models) {
    Comment.belongsTo(models.Proposal, { foreignKey: 'element' });
  };
  return Comment;
};
