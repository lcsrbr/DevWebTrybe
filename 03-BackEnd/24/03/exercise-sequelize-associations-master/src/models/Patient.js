module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {
        patient_id: { type: DataTypes.INTEGER, primaryKey: true },
        fullname: DataTypes.STRING,
    },
        {
            timestamps: false,
        });

    Patient.associate = (model) => {
        model.Patient.belongsTo(model.Plan, { as: 'Plan', foreignKey: 'plan_id' });
    };

    return Patient;
};
