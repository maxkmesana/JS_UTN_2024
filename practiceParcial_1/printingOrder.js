// hola mu || comienzo... || fin || en timeout || hi
function doStuff(){
    console.log("comienzo de la funcion");
    setTimeout(() => {
        setTimeout(sayHi);
        console.log("en timeout");
    }, 0);
    console.log("fin de la funcion");
}

function sayHi(){
    console.log("Hi...");
}

setTimeout(() => {
    doStuff();
}, 0);
console.log("hola mundo");