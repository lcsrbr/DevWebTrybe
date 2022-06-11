function exercicio1() {
    const genObj = (name) => {
        //const arrayName = name.split(' ')
        const names = name.split(' ');
        const email = `${names[0]}_${names[0]}@trybe.com`.toLowerCase();
        return {
            'nome completo': name,
            email: email
        }
    }

    const newEmployees = (func) => {
        const employees = {
            id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
            id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
            id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
        }
        return employees;
    };

    console.log(newEmployees(genObj));
}

function exercicio2() {
    //um numero aleatorio
    const verificaSorteio = (selecionado, sorteado) => selecionado === sorteado; //true or false

    const retonaValor = (selecionado, callback) => {
        const numero = Math.round(Math.random() * 5);
        if (callback(selecionado, numero) === true) { //aqui callback se torna verificaSorteio e gera a mensagem
            console.log('parabéns, você ganhou!');
        } else {
            console.log('não foi dessa vez!');
        }
    }
    retonaValor(2, verificaSorteio);

}
exercicio2();

function gabarito2() {
    const numberChecker = (myNumber, number) => myNumber === number; //considerando dois parametros e comparando um com o outro, na intenção de recuperar depois e verificar se a comparação é true ou false

    const lotteryResult = (myNumber, callback) => { //aqui eu chamo o primeiro numero no c.log como o numero que eu defino, para depois girar a função que vai criar o numero sorteado e a mensagem de acerto ou erro
        const number = Math.floor((Math.random() * 5) + 1);

        return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
    };

    console.log(lotteryResult(2, numberChecker));
}
gabarito2();

function exercicio3() {
    const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
    const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

}

function gabarito3() {
    const RIGHT_ANSWERS =  ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
    const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

    let contador = 0
    const compareAnswers = (rightAnswer, studentAnswer) => {
        if (rightAnswer === studentAnswer) {
            contador += 1;
        } else if (studentAnswer === 'N.A') {
            contador += 0;
        } else if (rightAnswer !== studentAnswer) {
        contador -= 0.5;
        }
        return contador
    };

    const countPoints = (rightAnswers, studentAnswers, action) => {
        let contador = 0;
        for (let index = 0; index < rightAnswers.length; index += 1) {
            action(rightAnswers[index], studentAnswers[index]);
        }
        return `Resultado final: ${action()} pontos`;
    };

    console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
}
gabarito3();

/* 
const criarFuncao = (resposta, gabarito, acertos) => {
    let acertos = 0;
    const callback = (checkPoints) => {
    for (let i = 0; i<resposta.length; i+= 1) {
        if (resposta[i] === gabarito[i]) {
            acertos += 1
        } else if (resposta === 'N.A'){
            acertos += 0; ///??????
        } else {
            acertos -= 0.5
        }
    }
    return acertos
}

}
console.log(criarFuncao(RIGHT_ANSWERS, STUDENT_ANSWERS, callback)); 
 */