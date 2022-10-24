const surgerieService = require('../services/surgerie.service')

const getByName = async (req, res) => {
    const { name } = req.params
    try {
        const plan = await surgerieService.getByName(name);

        if (!plan)
            return res.status(404).json({ message: 'Plano não encontrado' });

        return res.status(200).json(plan);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado' });
    };
};

module.exports = {
    getByName,
};
