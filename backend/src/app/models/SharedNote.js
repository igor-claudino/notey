module.exports = (sequelize, DataTypes) => {
  const SharedNote = sequelize.define("SharedNote");

  SharedNote.associate = models => {
    SharedNote.belongsTo(models.Note, {
      onDelete: "CASCADE",
      foreignKey: "note_id"
    });
    SharedNote.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: "user_id"
    });
  };

  return SharedNote;
};
