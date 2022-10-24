module.exports = (sequelize, _DataTypes) => {
    const PatientSurgeries = sequelize.define('PatientSurgeries',
      {},
      {
        timestamps: false,
        tableName: 'Patient_surgeries'
      },
    );
    PatientSurgeries.associate = (models) => {
        models.Patient.belongsToMany(models.Surgerie, {
          as: 'Surgerie',
          through: PatientSurgeries,
          foreignKey: 'patient_id', // se refere ao id de Book na tabela de `users_books`
          otherKey: 'surgery_id', // se refere a outra chave de `users_books` 
        });
        models.Surgerie.belongsToMany(models.Patient, {
          as: 'Patient',
          through: PatientSurgeries,
          foreignKey: 'surgery_id',  // se refere ao id de User na tabela de `users_books`
          otherKey: 'patient_id',
        });
      };
    
      return PatientSurgeries;
  };