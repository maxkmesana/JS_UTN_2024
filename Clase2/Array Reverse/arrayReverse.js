// Los arreglos tienen Array.reverse(), pero a modo de ejercicio escribir **reverseArray** y 
// **reverseArrayInPlace**.

function reverseArray(array){
    let responseArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        responseArray.push(array[i]);
    }

    return responseArray;
}

let array = [1,2,3,4,5,6,7,8,9];
//  
// console.log(reverseArray(array));
// console.log(array);