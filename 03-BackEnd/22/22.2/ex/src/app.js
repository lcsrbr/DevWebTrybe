// src/app.js
const express = require('express');

const app = express();

app.use(express.json());

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

// Crie um endpoint do tipo GET com a rota /myActivities/:id, que possa listar uma atividade do array por id 🚀
app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = activities.find((activ) => activ.id === Number(id));
  res.status(200).json({arrayPosition});
});

// Crie um endpoint do tipo GET com a rota /myActivities, que possa listar todas as atividades do array 🚀
app.get('/myActivities', (req, res) => res.status(200).json({ activities }));


// Crie um endpoint do tipo GET com a rota /filter/myActivities, que possa listar todas as atividades filtradas por status do array.
// A rota deve receber a informação por query e a chave deve-se chamar status. A chave status vai trazer consigo valor de Feito ou A fazer e o endpoint deve fazer o filtro das atividades 🚀
app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
let filter= activities;
 filter = status && activities.filter((activ) => status === activ.status);

  res.status(200).json({activities: filter});
});


//Crie um endpoint do tipo GET com a rota /search/myActivities, que possa listar todas as atividades filtradas por um termo específico do array.
//A rota deve receber a informação por query e a chave deve-se chamar q. A chave vai trazer consigo valor de ‘cachorro’ por exemplo, e o filtro deve trazer apenas as atividades com esse termo, se não encontrar, traga um array vazio 🚀

app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;
let search= activities;

if (q) {
search = activities.filter((activ) => activ.description.toLowerCase().includes(q.toLowerCase()));
}
  res.status(200).json({activities: search});
});


module.exports = app;