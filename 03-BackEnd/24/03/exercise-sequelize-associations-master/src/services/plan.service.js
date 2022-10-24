
const { Patient, Plan } = require('../models');


const getPatients = async (id) => {
    const patient = await Patient.findAll({ where: { plan_id: id }, include: { model: Plan, as: 'Plan' } });

    return patient;
};

module.exports = { getPatients }