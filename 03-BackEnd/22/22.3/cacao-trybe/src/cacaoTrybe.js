// src/cacaoTrybe.js

const fs = require('fs').promises;
const { join } = require('path');
const path = '/files/cacaoTrybeFile.json';

const readCacaoTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacaoTrybeFile = async (contentFile) => {
	try {
		await fs.writeFile(join(__dirname, path), JSON.stringify(contentFile));
	} catch (err) {
		console.log('erro ao tentar escrever arquivo', err.message);
		return null;
	}
};

const updateCacaoTrybeFile = async (param) => {
    const { id, name, brandId } = param
    const cacaoTrybe = await readCacaoTrybeFile();
    const chocolates = cacaoTrybe.chocolates;
    const del = chocolates.filter((choq) => Number(choq.id) !== Number(id))
    const newItem =  {
        'id': Number(id),
        'name': name,
        'brandId': brandId
    }
    const result = [...del, newItem];
    result.sort((a, b) => a.id - b.id)
    writeCacaoTrybeFile({brands: [...cacaoTrybe.brands], chocolates: [...result]})
    return newItem;
  };

const getAllChocolates = async () => {
    const cacaoTrybe = await readCacaoTrybeFile();
    return cacaoTrybe.chocolates;
  };
  

const createChocolate = async (name, brandId) => {
	const cacaoTrybe = await readCacaoTrybeFile(); // ESTA SALVO EM MEMORIA

	if (!name, !brandId) {
		return { error: 'CHOCOLATE INVALIDO ' }
	}

	const newChocolate = { id: cacaoTrybe.nextChocolateId, name, brandId };
	cacaoTrybe.chocolates.push(newChocolate);
	cacaoTrybe.nextChocolateId += 1;
	await writeCacaoTrybeFile(cacaoTrybe);

	return newChocolate;
};


const getChocolateById = async (id) => {
    const cacaoTrybe = await readCacaoTrybeFile();
    return cacaoTrybe.chocolates
      .filter((chocolate) => chocolate.id === id);
  };
  
  const getChocolatesByBrand = async (brandId) => {
    const cacaoTrybe = await readCacaoTrybeFile();
    return cacaoTrybe.chocolates
      .filter((chocolate) => chocolate.brandId === brandId);
  };

  const searchChocolateByName = async (param) => {
    const cacaoTrybe = await readCacaoTrybeFile();
    return cacaoTrybe.chocolates.filter((choq) => choq.name.toLowerCase().includes(param.toLowerCase()));
  };
  

module.exports = {
    getAllChocolates,
    createChocolate,
    getChocolateById,
    getChocolatesByBrand,
    searchChocolateByName,
    updateCacaoTrybeFile
};