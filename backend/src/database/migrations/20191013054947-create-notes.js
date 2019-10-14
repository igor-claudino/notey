module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("notes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        allowNull: true,
        type: DataTypes.STRING
      },
      content: {
        allowNull: true,
        type: DataTypes.TEXT
      },
      tags: {
        type: DataTypes.STRING
      },
      synced: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
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
