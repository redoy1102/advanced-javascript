const numbers = [1,2,3,4,5,8,9,7,9,8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// const result = numbers.map(x => x * x);
// console.log(result);

// const result = numbers.map(x => x * x);
// console.log(result);

const bigger = numbers.filter(x => x > 5);
console.log(bigger);

const smaller = numbers.filter(x => x < 5);
console.log(smaller)