
// Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.

// A pessoa cliente deverá conter o nome;
// O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.
// Exercício 4: Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.

// Exercício 3
// Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.

// A pessoa cliente deverá conter o nome;
// O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

class Cliente {
    private _name: string;
    constructor(name: string) { this._name = name }

    get name(): string {
        return this._name;
    }
}

class Item {
    private _pedido: string;
    private _preco: number;

    constructor(pedido: string, preco: number) {
        this._pedido = pedido;
        this._preco = preco;
    }

    get preco() {
        return this._preco
    }

    set preco(value: number) {
        this._preco = value;
    }
}

class Pedido {
    private _cliente: Cliente;
    private _pedido: Item[];
    private _metodo: string;
    private _taxa: number;
    constructor(cliente: Cliente, pedido: Item[], metodo: string, taxa: number) {
        this._cliente = cliente;
        this._metodo = metodo;
        this._pedido = pedido;
        this._taxa = taxa;
    }

    get calculaTotal(): number {
        return this._pedido.reduce((acc: any, cur: any): any => {
            // console.log(acc, cur.preco, 'acc, cur');
            return acc + cur.preco
        },0)
        // const result = this._pedido.reduce((acc, cur) => {
        //     return acc + cur
        // }, 0);
        // return result
        // const result = this._pedido
        // return console.log(result);
    }

    get calculaComDesconto():number {
        return this.calculaTotal * (1 - this._taxa)
    }
}

const client = new Cliente('João');

const sandwich = new Item('Sanduíche Natural', 5.00);
const juice = new Item('Suco de Abacaxi', 5.00);
const dessert = new Item('Gelatina de Uva', 2.50);

const order = new Pedido(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order.calculaTotal)
console.log(order.calculaComDesconto)