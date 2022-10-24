
const { Surgerie, Patient } = require('../models');


const getByName = async (name) => {
    const patient = await Surgerie.findAll({ where: { doctor: name }, include: { model: Patient, as: 'Patient' , through: {attributes: []}}});

    return patient;
};

module.exports = { getByName }