const planService = require('../services/patient.service')

const getAll = async (req, res) => {
  try {
    const plan = await planService.getAll();

    if (!plan)
      return res.status(404).json({ message: 'Plano não encontrado' });

    return res.status(200).json(plan);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
};

const getSurgeries = async (req, res) => {
  try {
    const plan = await planService.getSurgeries();

    if (!plan)
      return res.status(404).json({ message: 'Plano não encontrado' });

    return res.status(200).json(plan);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
}


const getSurgeries2 = async (req, res) => {
  try {
    const plan = await planService.getSurgeries2();

    if (!plan)
      return res.status(404).json({ message: 'Plano não encontrado' });

    return res.status(200).json(plan);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
}


const insert = async (req, res) => {
  const { fullname, plan_id } = req.body
  try {
    const plan = await planService.insert(fullname, plan_id);
console.log(plan);
    if (!plan)
      return res.status(404).json({ message: 'Plano não encontrado' });

    return res.status(200).json(plan);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
}

module.exports = {
  getAll,
  getSurgeries,
  insert,
  getSurgeries2
};
