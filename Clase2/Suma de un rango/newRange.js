// Modificar la función range para que reciba un tercer parámetro adicional 
// step para indicar un salto en la construcción del arreglo. Si no se recibe el parámetro step, 
// la función debe construir el arreglo con números consecutivos. Asegurar que un step negativo 
// produzca un resultado válido.
function newRange(start, end, steps){
    // check error of empty parameter
    if(start === "" || end === "") return -1;
    // check error of NaN
    if(typeof start != "number" || typeof end != "number" || typeof steps != "number") return -1;
    // check errors of invalid step parameter
    if(steps === undefined || steps <= 0) steps = 1;
    

    // Declare variables and populate array
    let arrayRange = [];
    for(let i=start; i<=end; i+=steps){
        arrayRange.push(i);
    }

    return arrayRange;
}

array = [150, 6, 20, 15, 90, 35, 10, 244];
console.log(newRange(2, 20, 3));