// src/models/Book.js
module.exports = (sequelize, DataTypes) => {
    const Surgerie = sequelize.define('Surgerie', {
      surgery_id: { type: DataTypes.INTEGER, primaryKey: true },
      specialty: DataTypes.STRING,
      doctor: DataTypes.STRING,
    },
      {
        timestamps: false,
      });
  
    return Surgerie;
  };
  