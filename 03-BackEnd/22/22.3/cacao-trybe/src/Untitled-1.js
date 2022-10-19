


// middlewares/validateName.js


route.post('/login', email, password, async (req, res) => {
    const { email, password } = req.body;
    const result = await utils.ex3(email, password);
    if (result.token) {
        return res.status(200).json(result);
    } else {
        return res.status(400).json(result);
    }
});



const verifyEmail = (email) => {
    let result = validate;
    if (!email) {
        result = { message: 'O campo "email" é obrigatório' };
    }
    if (!validate) {
        result = { message: 'O "email" deve ter o formato "email@email.com"' };
    }
    return result;
};
const verifyPassword = (password) => {
    const validate = password.length >= 6;
    let result = validate;
    if (!password) {
        result = { message: 'O campo "password" é obrigatório' };
    }
    if (validate) {
        result = { message: 'O "password" deve ter pelo menos 6 caracteres' };
    }
    return result;
};

const ex3 = async (email, password) => {
    const token = generateToken();
    if (email && verifyEmail(email) && password && verifyPassword(password)) {
        return { token };
    }
};
