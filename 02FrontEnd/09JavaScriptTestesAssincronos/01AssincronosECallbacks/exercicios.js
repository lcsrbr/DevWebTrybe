function ex1() {
    const planetDistanceFromSun = ({
            name,
            distanceFromSun: {
                value,
                measurementUnit
            }
        }) =>
        `${name} is ${value} ${measurementUnit} apart from the Sun`;

    const mars = {
        name: "Mars",
        distanceFromSun: {
            value: 227900000,
            measurementUnit: "kilometers",
        },
    };

    const venus = {
        name: "Venus",
        distanceFromSun: {
            value: 108200000,
            measurementUnit: "kilometers",
        },
    };

    const jupiter = {
        name: "Jupiter",
        distanceFromSun: {
            value: 778500000,
            measurementUnit: "kilometers",
        },
    };

    console.log(planetDistanceFromSun(mars)); // A
    console.log(planetDistanceFromSun(venus)); // B
    console.log(planetDistanceFromSun(jupiter)); // C
    //A, B, C
}

function ex2() {
    const planetDistanceFromSun = ({
            name,
            distanceFromSun: {
                value,
                measurementUnit
            }
        }) =>
        `${name} is ${value} ${measurementUnit} apart from the Sun`;

    const mars = {
        name: "Mars",
        distanceFromSun: {
            value: 227900000,
            measurementUnit: "kilometers",
        },
    };

    const venus = {
        name: "Venus",
        distanceFromSun: {
            value: 108200000,
            measurementUnit: "kilometers",
        },
    };

    const jupiter = {
        name: "Jupiter",
        distanceFromSun: {
            value: 778500000,
            measurementUnit: "kilometers",
        },
    };

    console.log(planetDistanceFromSun(mars)); // A
    setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
    setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
    //A,C,B
}

function ex3() {
    const getPlanet = () => {
        const mars = {
            name: "Mars",
            distanceFromSun: {
                value: 227900000,
                measurementUnit: "kilometers",
            },
        };
        setTimeout(() => console.log("Returned planet: ", mars), 4000);
    };

    getPlanet(); // imprime Marte depois de 4 segundos    
}

function ex4() {
    const messageDelay = () => Math.floor(Math.random() * 5000);

    const getMarsTemperature = () => {
        const maxTemperature = 58;
        return Math.floor(Math.random() * maxTemperature);
    };

    // crie a função sendMarsTemperature abaixo
    const sendMarsTemperature = () => {
        return setTimeout(() => console.log(`Mars temperature is ${getMarsTemperature()} degree Celsius`), messageDelay())
    }

    sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
}

function ex5() {
    const messageDelay = () => Math.floor(Math.random() * 5000);

    const getMarsTemperature = () => {
        const maxTemperature = 58;
        return Math.floor(Math.random() * maxTemperature);
    };

    const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

    const temperatureInFahrenheit = (temperature) =>
        console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

    const greet = (temperature) =>
        console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

    const sendMarsTemperature = (callback) => setTimeout(() => callback(getMarsTemperature()), messageDelay())
    // definição da função sendMarsTemperature...

    sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
    sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
}

function ex6() {
    const messageDelay = () => Math.floor(Math.random() * 5000);

    const getMarsTemperature = () => {
        const maxTemperature = 58;
        return Math.floor(Math.random() * maxTemperature);
    }

    const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

    const temperatureInFahrenheit = (temperature) =>
        console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

    const greet = (temperature) =>
        console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

    const handleError = (errorReason) =>
        console.log(`Error getting temperature: ${errorReason}`);

    const sendMarsTemperature = (param1, param2) => {
        const didOperationSucceed = Math.random() >= 0.4;
        if (didOperationSucceed) {
            param1(getMarsTemperature())
        } else {
            param2('Robot is busy')
        }

    }

    // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
    sendMarsTemperature(temperatureInFahrenheit, handleError);

    // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
    sendMarsTemperature(greet, handleError);
}

function ex7 () {
    const pokemons = [
        {
          name: 'Bulbasaur',
          type: 'Grass',
          ability: 'Razor Leaf',
        },
        {
          name: 'Charmander',
          type: 'Fire',
          ability: 'Ember',
        },
        {
          name: 'Squirtle',
          type: 'Water',
          ability: 'Water Gun',
        },
      ];
      
      console.log(pokemons.find('Squirtle'));

      function getPokemonDetails(filter, callback) {
        setTimeout(() => {
          if (pokemons.find(filter) === undefined) {
            return callback(new Error('Não temos esse pokémon para você :('), null);
          }
          const pokemon = pokemons.find(filter);
      
          const { name, type, ability } = pokemon;
      
          const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
      
          callback(null, messageFromProfOak);
        }, 2000);
      }
      
      //getPokemonDetails('Squirtle', () => {});
      
      module.exports = {
        getPokemonDetails,
      };
}
ex7()