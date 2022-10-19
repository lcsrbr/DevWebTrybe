const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};


Object.assign(lesson1, lesson3)

console.log(lesson1);

console.log(Object.keys(lesson1));

console.log(Object.keys(lesson1).length);

console.log(Object.values(lesson1));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

console.log(allLessons);

console.log(Object.values(allLessons.lesson1)[1] + Object.values(allLessons.lesson2)[1] + Object.values(allLessons.lesson3)[1]);

