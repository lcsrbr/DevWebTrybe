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
    const activities = await readActivitiesFile();
    const newActivtie = {
        id: activities.length + 1,
        description,
        status,
    }
    await writeActivities([...activities, newActivtie])

    return 'Atividade registrada com sucesso!';

}

module.exports = {
    getAllActivities,
    readActivitiesFile,
    createActivities
};