const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  const pedido = `Olá ${Object.values(order.order.delivery)[0]}, entrega para ${Object.values(order)[0]}, Telefone: ${Object.values(order)[1]}, R. ${Object.values(order.address)[0]}, Nº: ${Object.values(order.address)[1]}, AP: ${Object.values(order.address)[2]}.`
 return console.log(pedido);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

  order.order.delivery.deliveryPerson = "Luiz Silva"
  order.payment.total = "50"
  // "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  const pedido = `Olá ${Object.values(order.order.delivery)[0]}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${Object.values(order.order.drinks.coke)[0]} é de R$ ${Object.values(order.payment)[0]},00.`
  return console.log(pedido);
}

orderModifier(order);



// Modifique o nome da pessoa compradora., Modifique o valor total da compra para R$ 50,00.

