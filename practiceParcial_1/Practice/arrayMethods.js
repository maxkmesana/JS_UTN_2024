let array = [10,5,4,2,6];

// const x = array.reduce((accumulator, currentValue) => {
//     return accumulator += currentValue;
// }, 0);

// console.log(x);

// array.forEach((number, index) => {
//     console.log(`${index}: ${number}`);
// });

// const even = array.filter((number) => number % 2 === 0);
// console.log(even);

const newArray = array.map((number) => number += 1);
console.log(newArray);