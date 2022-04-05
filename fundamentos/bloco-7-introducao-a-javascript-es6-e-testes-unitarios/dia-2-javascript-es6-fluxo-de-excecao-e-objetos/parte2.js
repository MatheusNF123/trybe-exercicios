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

  // - 1 Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// * Note que o parâmetro da função já está sendo passado na chamada da função.
  
 /*  const customerInfo = (order) => {
      const valores = Object.values(order)
      const ana = Object.values(order)[3].delivery.deliveryPerson      
     return `Olá ${ana}, entrega para: ${order.name}, ${order.phoneNumber}, R.${valores[2].street}, Nº: ${valores[2].number}, AP:${valores[2].apartment}` 
  
  }
  
 customerInfo(order); */
 
 
// 2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// * Modifique o nome da pessoa compradora.
// * Modifique o valor total da compra para R$ 50,00.


 const orderModifier = (order) => {     
    order.name = 'joão'
    order.payment.total = 50.00
    let pizzas = order.order.pizza
    let drinks = order.order.drinks
    let coca = Object.entries(drinks)[0][1].type
    
    
    
    return `Olá ${order.name}, o total do seu pedido de  ${Object.keys(pizzas)[0]}, ${Object.keys(pizzas)[1]} e ${coca} é R$ ${order.payment.total}.00 .`
 
  }
  
  
 console.log(orderModifier(order)); 
