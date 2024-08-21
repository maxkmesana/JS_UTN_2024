// Escribir la función sum que reciba un array y retorne la sumatoria de sus elementos.
function range(start, end, array){
    // check error of empty parameter
    if(start === "" || end === "") return -1;
    // check error of NaN
    if(typeof start != "number" || typeof end != "number") return -1;
    
    // Declare variables and populate array
    let arrayToSum = array.slice(start, end + 1);
    let sum = 0;
    console.log(arrayToSum);

    // Sum contents of array to desired output
    arrayToSum.forEach(element => {
        sum += element;
    });

    return sum;
}

array = [150, 6, 20, 15, 90, 35];
console.log(range(3, 5, array));