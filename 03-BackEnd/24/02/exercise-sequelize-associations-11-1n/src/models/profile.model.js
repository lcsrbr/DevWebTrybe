// src/models/address.model.js

module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      accountId: { type: DataTypes.INTEGER, foreignKey: true },
      // A declaração da Foreign Key é opcional no model
    },
    {
      timestamps: false,
      tableName: 'Profiles',
      underscored: true,
    });
  
    Profile.associate = (models) => {
      Profile.belongsTo(models.Account,
        { foreignKey: 'accountId', as: 'accounts' });
    };
  
    return Profile;
  };