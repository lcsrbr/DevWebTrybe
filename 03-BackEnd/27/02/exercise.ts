// `Class`: Nome da classe, caso seja uma classe
// `Interface`: Nome da interface, caso seja uma interface
// `Extends`: Classe da qual herda (superclasse), caso exista
// `Implements`: Interfaces a qual implementa, caso exista
// `Attributes`: Atributos
// `Methods`: Métodos
// `Validations`: Validações que devem ser aplicadas aos atributos

// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo três caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

class Person2 {
    constructor(private _name: string, private _birthDate: Date) {
        this.name = _name
        this.birthDate = _birthDate
    }

    validateName(param: string) {
        if (param.length < 3) throw new Error('nome deve ter mais de 3 caracteres')
    }

    validateAge(param: Date) {
        var timeDiff = Math.abs(Date.now() - new Date(param).getTime());
        const result = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        if (result > 120 || result <= 0) {
            throw new Error('idade tem que ser menor que 120 e maior que 0');
        }
    }

    set name(param: string) {
        this.validateName(param)
        this._name = param
    }

    get name() {
        return this._name
    }

    set birthDate(param: Date) {
        this.validateAge(param)
        this._birthDate = param
    }

    get birthDate() {
        return this._birthDate
    }
}

const person2 = new Person2('edifier',new Date(Date.parse('Sep 04, 1993')) )
console.log(person2);

// `Class`: Student
// `Extends`: Person
// `Attributes`:
//     - enrollment: matrícula da pessoa estudante
//     - examsGrades: notas de provas
//     - worksGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e
//       preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
//     - generateEnrollment: retorna uma string única gerada
//       como matrícula para a pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 notas de trabalhos

class Student extends Person2 {
    private _enrollment: string;
    private _examsGrades: number[] = [];
    private _worksGrades: number[] = [];
    constructor(name:string, birthDate: Date){
        super(name, birthDate)
        this._enrollment = this.genEnrollment();
    }
    set enrollment(param:string) {
        this._enrollment = param
    }

    get enrollment() {
        return this._enrollment
    }

    genEnrollment() {
        return `${Date.now()}, ${this.name}, ${this.birthDate}`
    }
    
    set examsGrades(param: number[]) {
        this._examsGrades = param
    }

    get examsGrades(): number[] {
        return this._examsGrades
    }
    set worksGrades(param: number[]) {
        this._worksGrades = param
    }

    get worksGrades(): number[] {
        return this._worksGrades
    }

    sumGrades() {
        return [...this._examsGrades, ...this._worksGrades].reduce((acc, curr) => acc + curr)
    }

    sumAverageGrade() {
        return this.sumGrades() / (this._examsGrades.length + this._worksGrades.length)
    }
}

const newStd = new Student(person2.name, person2.birthDate)
console.log(newStd);
newStd.examsGrades = [10,20,30]
newStd.worksGrades = [1,2,3,4,5]

 console.log( newStd.sumGrades(), newStd.sumAverageGrade());


// export default class Person {
//     constructor(private _name: string, private _birthDate: Date) {
//         this.name = _name;
//         this.birthDate = _birthDate;
//     }

//     get name(): string {
//         return this._name;
//     }

//     set name(value: string) {
//         this.validateName(value);
//         this._name = value;
//     }

//     get birthDate(): Date {
//         return this._birthDate;
//     }

//     set birthDate(value: Date) {
//         this.validateBirthDate(value);
//         this._birthDate = value;
//     }

//     static getAge(value: Date): number {
//         const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
//         const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
//         return Math.floor(diff / yearMs);
//     }

//     private validateName(value: string): void {
//         if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
//     }

//     private validateBirthDate(value: Date): void {
//         if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
//         if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
//     }
// }