// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
    const jokeContainer = document.getElementById('jokeContainer')
    try {
    const myObject = {
        method: 'GET',
        headers: {'Accept': 'application/json'} 
    };
    const response = await fetch(API_URL, myObject)
    const data = await response.json()
    jokeContainer.innerText = data.joke;
}
catch(error) {
    'erro!'
}
};


window.onload = () => fetchJoke();
