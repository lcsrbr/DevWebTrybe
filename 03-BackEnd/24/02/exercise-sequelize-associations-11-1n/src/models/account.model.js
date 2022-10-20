// src/models/address.model.js

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    "Account",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "Accounts",
      underscored: true,
    }
  );

  Account.associate = (models) => {
    Account.hasMany(models.Comment, { foreignKey: "accountId", as: "comment" });
    Account.hasOne(models.Profile, { foreignKey: "accountId", as: "profile" });
  };

  return Account;
};
