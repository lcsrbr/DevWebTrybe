
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log(`Bem vinda, ` + info.personagem + `.`)

  info.recorrente = 'Sim';

  console.log(info)

  for (key in info) {
      console.table(key + `: `+ info[key])
  }

  console.log(` `);

/* 
  5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
   */

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  for (key in info) {
      if (key == 'recorrente' && info[key] == 'Sim' && info2[key] == 'Sim') {
        console.log("Ambos recorrentes")
    } else {
      console.log(info[key] + ' e ' + info2[key])
    }
}

console.log(` `);


let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  /* 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'". */
  
  console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0]['titulo'])

  leitor.livrosFavoritos.push( 
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
  )

  console.table(leitor.livrosFavoritos)

  console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");