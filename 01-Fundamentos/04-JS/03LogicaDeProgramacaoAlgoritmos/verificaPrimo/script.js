
function encontraPrimo(num) {
    let divisor = 0;
    let ePrimo = '';

    for (let i = 1; i <= num; i += 1) {
        if (num % i === 0) {
            divisor += 1
        }
        if (divisor === 2) {
            ePrimo = 'é primo'
        } else if (divisor > 2) {
            ePrimo = 'não é primo'
        }
    }
    let primos = []
    divisor = 0;

    for (let i = 1; i <= num; i += 1) {
        for (let i2 = 1; i2 <= i; i2 += 1) {
            if (i % i2 === 0) {
                divisor += 1
            }
        }
        if (divisor === 2) {
            primos.push(i)
        }
        divisor = 0
    }
    return console.log(`Números primos de 1 a ${num}: ${primos}. O número ${num} ${ePrimo}.`);

}

encontraPrimo(numero);
