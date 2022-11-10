class Animal {
    constructor(private name: string, private birthDate: Date) { }
  
    get age() {
      const timeDiff = Math.abs(
        Date.now() -
        new Date(this.birthDate).getTime()
      );
      return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
    
    animalName() {
      return this.name
  }

  }

  class Mammal extends Animal {
    get walk(): string {
      return `${this.animalName()} está andando!`;
    }
  }
  
  const tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2020')),
  );
  
//   const main = (animal: Animal) => {
//     console.log(animal.age);
//   }
  

  console.log(tiger, 'tigertigertiger', tiger.walk, 'idade', tiger.age);
  
// console.log(tiger.age, 'tigerage');

//   tiger.walk();

console.log('-----------------------------------');

// Crie uma classe chamada _Superclass_.
class Superclass {
    // A _Superclass_ deve possuir um atributo público _isSuper_.
    // isSuper: boolean;
  
    constructor(public isSuper: boolean = true) {
      // _isSuper_ deve ser setado como `true` na inicialização.
    //   this.isSuper = true;
    }
  
    // A _Superclass_ deve possuir um método público chamado `sayHello`, que deve imprimir "Olá mundo!".
    public sayHello(): void {
      console.log('Olá mundo!');
    }
  }
  
  // Crie uma classe chamada _Subclass_ que herda da _Superclass_.
  class Subclass extends Superclass { }
  
  // Crie uma função `myFunc` fora do escopo da _Subclass_ que recebe um objeto da _Superclass_.
  const myFunc = (object: Superclass) => {
    // Dentro dessa função, chame o método `sayHello` do objeto passado como parâmetro.
    object.sayHello();
  };
  
  // Crie um objeto da _Superclass_ e outro da _Subclass_.
  const sup = new Superclass();
  const sub = new Subclass();
  
  // Chame a função `myFunc` 2 vezes, passando os objetos criados.
  myFunc(sup);
  myFunc(sub);

  console.log('-----------------------------------');


  class Animal2 {
    constructor(public birthDate: string = '1', private teste:string = '2', protected aaa: string = '3') {  }

    public privateCh(param: string) {
        this.teste = param
    }
  }


  class Bird2 extends Animal2 {
    constructor(public name: string) { 
        super()
        this.privateCh('oioioi')
    } // ERRO: constructor deve respeitar o contrato da superclasse
    
}

const aaa = new Bird2('oi')

console.log(aaa);

console.log('-----------------------------------');


class Superclass2 {
    // isSuper: boolean;
    constructor(public isSuper: boolean = true) {
    //   this.isSuper = true;
    }
  
    public sayHello(): void {
      console.log('Olá mundo!');
    }
  }
  
  class Subclass2 extends Superclass2 {
    // No construtor da _Subclass_, o atributo _isSuper_ deve ser setado como `false`. Você vai precisar utilizar o _super_.
    constructor() {
      super();
      this.isSuper = false;
    }
  }
  
  const myFunc2 = (object: Superclass) => {
    object.sayHello();
    // Dentro da função que recebe um objeto da _Superclass_ como parâmetro, cheque o valor do atributo _isSuper_ e imprima no console "Super!" se for `true` e "Sub!" se for `false`;
    console.log(object.isSuper);
  };
  
  const sup2 = new Superclass2();
  const sub2 = new Subclass2();
  
  myFunc2(sup2);
  myFunc2(sub2);