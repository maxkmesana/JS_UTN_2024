// function promise_2(number){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(number * 2);
//         }, 1000);
//     });
// }

// const promise = promise_2(4)
// promise.then((number) => console.log(number));


// function promise_5(array){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(array.reduce((previous, current) => {
//                 return previous += current;
//             }, 0));
//         }, 1000);
//     });
// }

// const promise = promise_5([1,2,3,4,5]).then((result) => console.log(result));