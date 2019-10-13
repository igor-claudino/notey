module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("shared_notes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      note_id: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "notes",
          key: "id",
          as: "note_id"
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
          as: "user_id"
        }
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("notes");
  }
};
