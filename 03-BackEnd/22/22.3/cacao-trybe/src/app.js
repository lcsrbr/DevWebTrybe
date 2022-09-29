// src/app.js

const express = require('express');

const app = express();
app.use(express.json());

const cacaoTrybe = require('./cacaoTrybe');


app.get('/chocolates', async (req, res) => {
    const chocolates = await cacaoTrybe.getAllChocolates();
    res.status(200).json({ chocolates });
});

app.post('/chocolates', async (req, res) => {
    const { name, brandId } = req.body;
    console.log(name, brandId);
    const chocolate = await cacaoTrybe.createChocolate(name, brandId);

    res.status(201).json({ chocolate });
    // console.log(req.body);
    // res.status(201).json({ choc:'chocolate' });
});

app.get('/chocolates/:id', async (req, res) => {
    const { id } = req.params;
    // Usamos o Number para converter o id em um inteiro
    const chocolate = await cacaoTrybe.getChocolateById(Number(id));
    res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
    const { brandId } = req.params;
    const chocolates = await cacaoTrybe.getChocolatesByBrand(Number(brandId));
    res.status(200).json({ chocolates });
});

module.exports = app;