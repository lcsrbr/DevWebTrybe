console.log(' ');
console.log(' 1 - Crie um objeto player contendo as variáveis listadas abaixo.');

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
     name: 'Marta',
    lastName: 'Silva',
    age: 34,
         medals: { 
            golden: 2, 
            silver: 3 
            },
}

console.table(player)
console.log(player)

console.log(' ');
console.log('2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: A jogadora Marta Silva tem 34 anos de idade.');

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')


console.log(' ');
console.log('3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi  considerada a melhor do mundo.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.table(player.bestInTheWorld)

console.log(' ');
console.log('4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes.');
player.fullName = player.name + ' ' + player.lastName;

console.log('A jogadora ' + player.fullName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes: ' + player.bestInTheWorld + '.');

console.log('A jogadora ' + player.fullName + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.' )
