const planService = require('../services/plan.service')

const getPatients = async (req, res) => {
    const { id } = req.params
    try {
        const plan = await planService.getPatients(id);

        if (!plan)
            return res.status(404).json({ message: 'Plano não encontrado' });

        return res.status(200).json(plan);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado' });
    };
};

module.exports = {
    getPatients,
};
