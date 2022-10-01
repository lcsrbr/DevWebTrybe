const fs = require('fs').promises;
const { join } = require('path');
const path = './api.json';

const readActivitiesFile = async () => {
    try {
        const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
        return JSON.parse(contentFile);
    } catch (error) {
        return null;
    }
};

const getAllActivities = async () => {
    const activities = await readActivitiesFile();
    return activities;
};

const writeActivities = async (contentFile) => {
    try {
        await fs.writeFile(join(__dirname, path), JSON.stringify(contentFile));
    } catch (err) {
        console.log('erro ao tentar escrever arquivo', err.message);
        return null;
    }
};

const createActivities = async (description, status) => {
    const api = await readActivitiesFile();
    const newActivtie = {
        id: activities.length + 1,
        description,
        status,
    }
    const newApi = {activities: [...api.activities, newActivtie], users: [...api.users]}
    await writeActivities(newApi)
    return 'Atividade registrada com sucesso!';
}

const readUsers = async () => {
    try {
        const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
        return JSON.parse(contentFile);
    } catch (error) {
        return null;
    }
};

const getUsers = async () => {
    const {users} = await readUsers();
    return users;
};

const writeUsers = async (contentFile) => {
    try {
        await fs.writeFile(join(__dirname, path), JSON.stringify(contentFile));
    } catch (err) {
        console.log('erro ao tentar escrever arquivo', err.message);
        return null;
    }
};

const createUsers = async (email, password, firstName, phone) => {
    const api = await readUsers();
    const newUser = {
        email,
        password,
        firstName,
        phone
    }
    const newApi = {activities: [...api.activities], users: [...api.users, newUser]}
    await writeUsers(newApi)

    return 'Usuário registrado com sucesso!';

}

module.exports = {
    getAllActivities,
    readActivitiesFile,
    createActivities,
    createUsers,
    writeUsers,
    getUsers
};