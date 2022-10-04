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

app.get('/chocolates/total', async (req, res) => {
    const chocolates = await cacaoTrybe.getAllChocolates();
    res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/search', async (req, res) => {
    const { name } = req.query;
    const chocolates = await cacaoTrybe.searchChocolateByName(name);

    if (chocolates.length < 1) {
        res.status(404).json([]);
    }
    res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
    const { id } = req.params;
    const { name, brandId } = req.body;
    const chocolates = await cacaoTrybe.updateCacaoTrybeFile({ id, name, brandId });
    if (chocolates.length < 1) {
        res.status(404).json({ message: 'chocolate not found' });
    }
    res.status(200).json({ chocolates });
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