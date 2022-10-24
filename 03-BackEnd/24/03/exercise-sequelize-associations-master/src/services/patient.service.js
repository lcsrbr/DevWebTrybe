// src/services/userBook.service.js

const { Plan, Patient, Surgerie } = require('../models');

const getAll = () => Patient.findAll({ include: { model: Plan, as: 'Plan' }, include: { model: PerformancePaintTiming, as: 'pacient', through: { attributes: [] } } });
const getSurgeries = () => Patient.findAll({ include: { model: Surgerie, as: 'Surgerie', through: { attributes: [] } } });
const getSurgeries2 = () => Patient.findAll({ include: { model: Surgerie, as: 'Surgerie', attributes: { exclude: ['doctor'] }, through: { attributes: [] } } });

const insert = (fullname, plan_id) => Patient.create({ fullname, plan_id })
module.exports = {
    getAll,
    getSurgeries,
    insert,
    getSurgeries2
};
