// middlewares/validateName.js
module.exports = (req, res, next) => {
    const { description, status } = req.body;
    if (!description) {
        return res.status(400).json(
            { message: 'campo description é obrigatório' },
        );
    }

    if (!status) {
        return res.status(400).json(
            { message: 'campo status é obrigatório' },
        );
    }

    next();
};