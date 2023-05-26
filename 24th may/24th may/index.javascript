// }
// console.log('\n\n ' + text)

const fruits = [{
    id: 1,
    name: 'mango',
    price: 100,
    quantity: 1,
},
{
    id: 2,
    name: 'banana',
    price: 80,
    quantity: 12,
},
{
    id: 3,
    name: 'apple',
    price: 120,
    quantity: 1,
}]
// const fruits = [{
//     id: 1,
//     name: 'mango',
//     price: 100,
//     quantity: 1,
// },
// {
//     id: 2,
//     name: 'banana',
//     price: 80,
//     quantity: 12,
// },
// {
//     id: 3,
//     name: 'apple',
//     price: 120,
//     quantity: 1,
// }]

// for (const fruit of fruits) {   
//     console.log(`I am ${fruit.name} and You can get me in ${fruit.quantity} pieces/piece for ${fruit.price} rupees`);
// }

function sum(firstNumber, secondNumber) {
    const sum = firstNumber + secondNumber;
    console.log(sum);
}

function difference(firstNumber, secondNumber) {
    const difference = firstNumber - secondNumber;
    console.log(difference);
}

function product(firstNumber, secondNumber) {
    const product = firstNumber * secondNumber;
    console.log(product);
}

const firstNumber = 10;
const secondNumber = 20;
sum(firstNumber, secondNumber);
difference(firstNumber, secondNumber);
product(firstNumber, secondNumber);

for (const fruit of fruits) {   
    console.log(`I am ${fruit.name} and You can get me in ${fruit.quantity} pieces/piece for ${fruit.price} rupees`);
}