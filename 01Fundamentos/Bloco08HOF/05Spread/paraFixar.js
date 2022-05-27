//1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.
function ex1() {
    const user = {
        name: 'Maria',
        age: 21,
        nationality: 'Brazilian',
    };

    const jobInfos = {
        profession: 'Software engineer',
        squad: 'Rocket Landing Logic',
        squadInitials: 'RLL',
    };

    const obj = ({
        ...user,
        ...jobInfos
    })
    /* 
    {
      name: 'Maria',
      age: 21,
      nationality: 'Brazilian',
      profession: 'Software engineer',
      squad: 'Rocket Landing Logic',
      squadInitials: 'RLL'
    }
     */

    const infos = ({
        name,
        age,
        nationality,
        profession,
        squad,
        squadInitials
    }) => console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials} - ${squad}`);

    infos(obj)
}

function ex2() {
    const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

    // saudacoes[1](saudacoes[0]); // Olá

    const [cur1, cur2] = saudacoes;
    cur2(cur1)



    // Produza o mesmo resultado acima, porém utilizando array destructuring
}

function ex3() {
    let comida = 'gato';
    let animal = 'água';
    let bebida = 'arroz';

    console.log(comida, animal, bebida); // arroz gato água

    // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

    [comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
    console.log(comida, animal, bebida); // arroz gato água

}

function ex4() {
    //3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

    let numerosPares = [1, 3, 5, 6, 8, 10, 12];

   [, , , ...numerosPares] = numerosPares

    console.log(numerosPares); // [6, 8, 10, 12];

    // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
}

function ex5() {
    const getNationality = ({ firstName, nationality='Brazilian' }) => `${firstName} is ${nationality}`;

    const person = {
      firstName: 'João',
      lastName: 'Jr II',
    };
    
    const otherPerson = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russian',
    };
    

    console.log(getNationality(otherPerson)); // Ivan is Russian
    console.log(getNationality(person));
}


function ex6() {
    const getPosition = (latitude, longitude) => ({
        latitude,
        longitude});
      
      console.log(getPosition(-19.8157, -43.9542));
}

function ex7() {
    const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!
greeting('teste'); // // Welcome teste!

const multiply = (number , value = 1) =>  number * value;
  
  console.log(multiply(8));
}
  
ex7()
const products = [
    {
      name: 'laptop',
      price: 1000,
      id: 3,
    },
    {
      name: 'desktop',
      price: 1500,
      id: 2,
    },
    {
      name: 'phone',
      price: 500,
      id: 1,
    },
  ];
  
  console.log(products.sort(products.name));

  const adultos = [
    {
      peso: 100,
      altura: 1.85,
    },
    {
      peso: 90,
      altura: 1.72,
    },
    {
      peso: 79,
      altura: 1.99,
    },
  ];
  
  // IMC = Índice de Massa Corporal
  
  function IMC(adulto) {
    return parseFloat((adulto.peso/(Math.pow(adulto.altura,2))).toFixed(2));
  }
  
  console.log(adultos.map(IMC));
  
  