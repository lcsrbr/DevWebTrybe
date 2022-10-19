const fs = require('fs').promises;
const path = require('path')


async function API() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
    const result = await JSON.parse(data)
    return result
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

const ex61 = async() => {
    const retr = await API()
    retr.forEach(({ id, name }) => console.log(`${id} - ${name}`));
}

const ex62 = async(param) => {
    const retr = await API()
    const result = retr.find((char) => Number(char.id) === Number(param))
    if (!result) throw new Error('id não encontrado');
    return console.log(result);
}

const ex63 = async() => {
    const retr = await API()
    const remove = retr.filter((char) => char.id !== '10' && char.id !== '6')
    await fs.writeFile(path.resolve(__dirname, './simpsons.json'), JSON.stringify(remove));
}

const ex64 = async() => {
    const retr = await API()
    const select = retr.filter((char) => Number(char.id) <= 4)
    await fs.writeFile('./DevWebTrybe/03-BackEnd/22/22.1/Simpsons/simpsonsFamily.json', JSON.stringify(select));
}


const ex65 = async() => {
    const data = await fs.readFile(path.resolve(__dirname, './simpsonsFamily.json'));
    const retr = await JSON.parse(data)
    const nelson = { id: '10', name: 'Nelson Muntz' }
    const add = [...retr, nelson ]
    await fs.writeFile(path.resolve(__dirname, './simpsonsFamily.json'), JSON.stringify(add));
}


const ex66 = async() => {
    const data = await fs.readFile(path.resolve(__dirname, './simpsonsFamily.json'));
    const result = await JSON.parse(data)
    console.log(result);
    const remove = result.filter((char) => char.name !== 'Nelson Muntz')
    const maggie = { id: '10', name: 'Maggie Simpson' }
    const add = [...remove, maggie ]
    await fs.writeFile(path.resolve(__dirname, './simpsonsFamily.json'), JSON.stringify(add));
}
ex66();
