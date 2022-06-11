//Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

function pt1 () {
const escritorio = {
    mesa: 'pc',
    mesa2: 'ps4',
    rack: 'instrumentos'
}

function addChave(chave, valor) {
    escritorio[chave] = valor

    return escritorio
}

addChave('microfone', 'suporte');
console.log(addChave('microfone2', 'suporte2'));
}
// pt1()

function pt2 () {
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

let habilidades = (student) => {
    let array = Object.keys(student)
    for (let i in array) {
        console.log(`Nome da habilidade :${array[i]}, Nível: ${student[array[i]]}`);
    }
}
 
habilidades(student1)
console.log(``);
habilidades(student2) 
}

// pt2()


function pt3 () {
    const student1 = {
        Html: 'Muito Bom',
        Css: 'Bom',
        JavaScript: 'Ótimo',
        SoftSkills: 'Ótimo',
    };
    
    const student2 = {
        Html: 'Bom',
        Css: 'Ótimo',
        JavaScript: 'Ruim',
        SoftSkills: 'Ótimo',
        Git: 'Bom', // chave adicionada
    };
    
    let habilidades = (student) => {
        let chave = Object.keys(student)
        let valor = Object.values(student)
        console.log(valor);
        for (let i in chave) {
            console.log(`Nome da habilidade :${chave[i]}, Nível: ${valor[i]}`);
        }
    }
     
    habilidades(student1);
    console.log(``);
    habilidades(student2);
    console.log(``);
    console.log(Object.values(student1));
    console.log(``);
    console.log(Object.entries(student1)[0]);
    console.log(``);
    console.log(Object.entries(student1)[0][1]);
    }
    
 //    pt3()

 function pt4 () {
    const student1 = {
        Html: 'Muito Bom',
        Css: 'Bom',
        JavaScript: 'Ótimo',
        SoftSkills: 'Ótimo',
    };
    
    console.log(Object.entries(student1)[0]);
    console.log(``);
    console.log(Object.entries(student1)[0][1]);

    
    const entries = Object.entries(student1)
    for(index in entries) {
        console.log('--------');
        console.log(`Habilidade: ${entries[index][0]}, Avaliação: ${entries[index][1]}`);
      };
    }
    
     pt3()