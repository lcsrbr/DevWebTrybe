// Person.ts

abstract class Person {
    constructor(private _name: string, private _birthDate: Date) {
      this.name = _name;
      this.birthDate = _birthDate;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      this.validateName(value);
      this._name = value;
    }
  
    get birthDate(): Date {
      return this._birthDate;
    }
  
    set birthDate(value: Date) {
      this.validateBirthDate(value);
      this._birthDate = value;
    }
  
    static getAge(value: Date): number {
      const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
      const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
      return Math.floor(diff / yearMs);
    }
  
    private validateName(value: string): void {
      if (value.length < 3) {
        throw new Error('O nome deve conter no mínimo 3 caracteres.');
      }
    }
  
    private validateBirthDate(value: Date): void {
      if (value.getTime() > new Date().getTime()) {
        throw new Error('A data de nascimento não pode ser uma data no futuro.');
      }
      if (Person.getAge(value) > 120) {
        throw new Error('A pessoa deve ter no máximo 120 anos.');
      }
    }
  }

class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }
  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');

    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');

    this._worksGrades = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}

abstract class Employee extends Person {
    registration: string;
    salary: number;
    admissionDate: Date;
  constructor(name: string, birthDate: Date) {
    super(name, birthDate)

}
generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `FNC${randomStr}`;
};
}

class Subject {
    constructor(private _name: string) {
      this.name = _name;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      this.validateName(value);
      this._name = value;
    }
  
    private validateName(value: string): void {
      if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
  }

class Teacher extends Employee {
  private _subject: Subject;

  constructor(name: string, birthDate: Date, _salary: number , subject: Subject) {
    super(name, birthDate);
    this._subject = subject;
    // this._salary = this.salary;
  }

  get getSubject(): Subject {
    return this._subject;
  }

  set setSubject(value: Subject) {
    this._subject = value;
  }

  get getRegistration2(): string {
    return this.registration;
  }

  set setRegistration2(value: string) {
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

    this.registration = value;
  }

  get getSalary(): number {
    return this.salary;
  }

  set setAalary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo.');

    this.salary = value;
  }

  get getAdmissionDate(): Date {
    return this.admissionDate;
  }

  set setAdmissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

    this.admissionDate = value;
  }

  }
}

const math = new Subject('Matemática');
const hist = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, hist);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);
