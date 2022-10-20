const AccountService = require("../services/account.service");
const CommentService = require("../services/comment.service");
const ProfileService = require("../services/profile.service");

const getAll = async (_req, res) => {
  try {
    const accounts = await AccountService.getAll();
    return res.status(200).json(accounts);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const Account = await AccountService.getById(id);

    if (!Account) {
      return res.status(404).json({ message: "Conta não encontrada" });
    }

    return res.status(200).json(Account);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};

const getComments = async (req, res) => {
  try {
    const { id } = req.params;
    const Comments = await CommentService.getByAccId(id);

    if (!Comments) {
      return res.status(404).json({ message: "Conta não encontrada" });
    }

    return res.status(200).json(Comments);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};

const insertAccount = async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone } = req.body;

    const account = await AccountService.insertAccount(email, password);
    if (!account) {
      return res.status(404).send({ message: 'Erro ao cadastrar uma conta!' });
    }

    const profile = await ProfileService.insertProfile(firstName, lastName, phone, account.id);
    if (!profile) {
      return res.status(404).send({ message: 'Erro ao cadastrar um perfil!' });
    }
  
    return res.status(200).json({ message: 'Conta cadastrada com sucesso' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};

module.exports = { getAll, getById, getComments, insertAccount };
