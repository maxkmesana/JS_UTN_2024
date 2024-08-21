// Los arreglos tienen Array.reverse(), pero a modo de ejercicio escribir **reverseArray** y 
// **reverseArrayInPlace**.

function reverseArray(array){
    let responseArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        responseArray.push(array[i]);
    }

    return responseArray;
}

function reverseArrayInPlace(array){
    let arrayRightIndex = array.length - 1;
    for(let i=0; i<=array.length; i++){
        if(arrayRightIndex < i) break;
        if(i === arrayRightIndex) break;
        console.log(arrayRightIndex);

        const leftElement = array[i];
        array[i] = array[arrayRightIndex];
        array[arrayRightIndex] = leftElement;
        arrayRightIndex--;
    }
}

let array = [1,2,3,4,5,6,7,8,9];
//  
// console.log(reverseArray(array));
// console.log(array);
reverseArrayInPlace(array);
console.log(array);