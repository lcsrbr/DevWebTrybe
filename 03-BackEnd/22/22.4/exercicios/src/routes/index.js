const express = require('express');
const utils = require('../utils')
const validate = require('../middlewares/validate'); 

const route = express.Router();

route.get('/activities', async (_req, res) => {
    const result = await utils.getAllActivities()
    return res.status(200).json({ result });
})

route.post('/activities', validate, async (req, res) => {
    const { description, status } = req.body;
    const message = await utils.createActivities(description, status);

    res.status(201).json({ message });
})

route.get('/signup', async (_req, res) => {
    const result = await utils.getUsers()
    return res.status(200).json({ result });
})

route.post('/signup', async (req, res) => {
    const { email, password, firstName, phone } = req.body;
    const message = await utils.createUsers(email, password, firstName, phone);

    res.status(201).json({ message });
})


module.exports = route;

