// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

class School {
    private _matricula: string;
    private _nome: string;
    private _notasProvas: number[];
    private _notasTrabalhos: number[];

    constructor(
        matricula: string,
        nome: string,
        notasProvas: number[],
        notasTrabalhos: number[],
    ) {    
        this._matricula = matricula;
        this._nome = nome;
        this._notasProvas = notasProvas;
        this._notasTrabalhos = notasTrabalhos;
        // if (notasProvas.length === 4) {
        //     this._notasProvas = notasProvas;
        // } else {
        //     throw console.error('array must be 4 numbers');
        // }
        // if (notasTrabalhos.length === 2) {
        //     this._notasTrabalhos = notasTrabalhos;
        // } else {
        //     throw console.error('array must be 2 numbers');
        // }
    }

    get totalNotasProvas():number {
     const result = [...this._notasProvas, ...this._notasTrabalhos].reduce((acc, cur) => {
        return acc + cur
    }, 0);
    return result // console.log(result, 'totalNotasProvas');
}

get mediaNotasProvas(): number {
    const result = this.totalNotasProvas / (this._notasProvas.length + this._notasTrabalhos.length)
    return Math.round(result);
}

    get infos(): void {
        return console
            .log(`o valor de sua matrícula é ${this._matricula}
nome do aluno é ${this._nome}
as notas das provas são ${this._notasProvas}
as notas dos trabalhos são ${this._notasTrabalhos}`);
    }
}

console.log('Novo Teste');
const mat1 = new School('matricula1', 'lucas', [2, 3, 4, 5], [10, 10])
mat1.infos
console.log(mat1.totalNotasProvas, 'totalnotasprovas');
console.log(mat1.mediaNotasProvas, 'mediaNotasProvas');

// const mat2 = new School('matricula1', 'lucas', [3, 4, 5], [10, 10, 10])
// mat2.infos

// // class School2 {
// //     private _matricula: string;
// //     private _nome: string;
// //     private _notasProvas: number[];
// //     private _notasTrabalhos: number[];

// //     constructor(
// //         matricula: string,
// //         nome: string,
// //         notasProvas: number[],
// //         notasTrabalhos: number[],
// //     ) {
// //         this._matricula= matricula;
// //         this._nome = nome;
// //         this._notasProvas = notasProvas;
// //         this._notasTrabalhos = notasTrabalhos;
// //     }

// // }



// class Student {
//     private _enrollment: string;
//     private _name: string;
//     private _examsGrades: number[];
//     private _worksGrades: number[];

//     constructor(enrollment: string, name: string) {
//         this._enrollment = enrollment;
//         this._name = name;
//         this._examsGrades = [];
//         this._worksGrades = [];
//     }

//     get enrollment(): string {
//         return this._enrollment;
//     }

//     set enrollment(value: string) {
//         this._enrollment = value;
//     }

//     get name(): string {
//         return this._name;
//     }

//     set name(value: string) {
//         if (value.length < 3) {
//             throw new Error('O nome deve conter no mínimo 3 caracteres.');
//         }

//         this._name = value;
//     }

//     get examsGrades(): number[] {
//         return this._examsGrades;
//     }

//     set examsGrades(value: number[]) {
//         if (value.length > 4) {
//             throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
//         }

//         this._examsGrades = value;
//     }

//     get worksGrades(): number[] {
//         return this._worksGrades;
//     }

//     set worksGrades(value: number[]) {
//         if (value.length > 2) {
//             throw new Error(
//                 'A pessoa estudante só pode possuir 2 notas de trabalhos.',
//             );
//         }

//         this._worksGrades = value;
//     }
// }

// // Para testar!

// const personOne = new Student('202001011', 'Maria da Silva');

// console.log(personOne);

// const personTwo = new Student('202001012', 'Ja');

// console.log(personTwo);



// function sum(acc: number, grade: number): number {  
// return acc + grade;
// }
