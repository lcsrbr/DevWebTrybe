let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let key in names) {
      console.log('Olá ' + names[key])
  }
/* 
Terminal:
Olá João
Olá Maria
Olá Jorge
 */
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  
  for (key in car) {
      console.log(key+ ":" + car[key])
  }
/* 
Terminal:
model:A3 Sedan
manufacturer:Audi
year:2020 
*/