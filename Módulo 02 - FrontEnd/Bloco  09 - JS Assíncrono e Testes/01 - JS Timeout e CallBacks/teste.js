const despesaMensal = (renda, despesas, callback) => {

  const despesaTotal = callback(despesas);
  const saldoFinal = renda - despesaTotal;

  console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
};

function exemplo1() {
  // Definição da função userFullName
  const userFullName = ({
    firstName,
    lastName,
    nationality
  }) => `Hello! My name is ${firstName} ${lastName} and i am ${nationality}`;

  // Definição da função getUser
  const getUser = (callback) => {
    const userToReturn = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian"
    };
    // Retornamos nosso parâmetro, que será uma função (callback)
    return callback(userToReturn);
  };

  // Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
  console.log(getUser(userFullName))
}

function ex1() {

  const userFullName = ({
    firstName,
    lastName
  }) => `Hello! My name is ${firstName} ${lastName}`;
  const userNationality = ({
    firstName,
    nationality
  }) => `${firstName} is ${nationality}`;

  const getUser = (callback) => {
    const userToReturn = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian"
    };
    return callback(userToReturn) // Insira o retorno da função `getUser`
  };

  console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
  console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

}
function ex2() {

const userFullName = ({
  firstName,
  lastName
}) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({
  firstName,
  nationality
}) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    console.log(callback(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo
}

function ex3() {
  const countryName = ({ name }) => console.log(`Returned country is ${name}`);
  const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);
  
  const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);
  
  const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);
  
  const getCountry = (onSuccess, erro) => {
    setTimeout(() => {
      const didOperationSucceed = Math.random() >= 0.5;
      if(didOperationSucceed) {
        const country = {
          name: "Brazil",
          hdi: 0.759,
          currency: "Real",
        };
        onSuccess(country);
      } else {
        const errorMessage = "Country could not be found";
        erro(errorMessage)
      }
    }, delay());
  };
  
  // Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
  getCountry(countryName, printErrorMessage);
  
  // Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
  getCountry(countryCurrency, printErrorMessage);
}

ex3()