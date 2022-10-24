// src/models/Book.js
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    plan_id: { type: DataTypes.INTEGER, primaryKey: true },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  },
    {
      timestamps: false,
    });

  Plan.associate = (model) => {
    Plan.hasMany(model.Patient, { foreignKey: 'plan_id', as: 'patients' })
  }

  return Plan;
};
