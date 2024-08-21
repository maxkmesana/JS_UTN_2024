// Escribir la función **range** que tome dos argumentos, **start** y **end** y 
// retorne un arreglo conteniendo todos los numeros desde **start** hasta **end** inclusive.

function range(start, end){
    // check error of empty parameter
    if(start === "" || end === "") return -1;
    // check error of NaN
    if(typeof start != "number" || typeof end != "number") return -1;
    
    // Declare variables and populate array
    let arrayRange = [];
    for(let i=start; i<=end; i++){
        arrayRange.push(i);
    }

    return arrayRange;
}

array = [150, 6, 20, 15, 90, 35];
console.log(range(3, 5, array));

