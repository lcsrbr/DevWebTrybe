const express = require('express');
const patientController = require('./controllers/patient.controller');
const planController = require('./controllers/plan.controller');
const surgerieController = require('./controllers/surgerie.controller');

const app = express();
app.use(express.json());

app.get('/patients', patientController.getAll);

app.get('/surgeries/:name', surgerieController.getByName);

app.get('/patients/surgeries', patientController.getSurgeries);

app.get('/plans/:id', planController.getPatients);

app.post('/patients', patientController.insert);

app.get('/patients/surgeries2', patientController.getSurgeries2);


module.exports = app;