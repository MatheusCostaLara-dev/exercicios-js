const prod1 = {};
prod1.nome = 'iPhone';
prod1.preco = 3000.00;
prod1['Desconto legal'] = 0.40; //apesar de funcionar, evite atributos com espaço
console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo', 
    preco: 79.90
};

console.log(prod2)