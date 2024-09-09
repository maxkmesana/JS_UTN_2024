/*
EJ 1:
Escribe una función llamada `mostrarMensaje` que acepte un mensaje como argumento y una
función de callback. La función `mostrarMensaje` debe mostrar el mensaje y luego llamar a la
función de callback
*/

function mostrarMensaje(mensaje, callback){
    console.log(mensaje);
    callback();
}

// mostrarMensaje("Mensaje x", () => console.log(123));

/*
EJ 2:
Crea una función llamada `sumarAsync` que acepte dos números y una función de callback.
Esta función debe sumar los números y luego llamar a la función de callback con el resultado.
*/

function sumarAsync(num1, num2, callback){
    callback(num1 + num2);
}

// sumarAsync(5, 2, console.log);

/*
EJ 3:
Escribe una función llamada `retrasarEjecucion` que acepte una función de callback y un
número de milisegundos. La función debe llamar al callback después de la cantidad
especificada de tiempo utilizando `setTimeout`.
*/

function retrasarEjecucion(callback, milisegundos){
    if(typeof callback !== "function") return;
    if(typeof milisegundos !== "number") return;
    setTimeout(callback, milisegundos);
}

/*
EJ 4:
Crea una función llamada `obtenerDatosUsuario` que simule una solicitud HTTP para obtener
datos de usuario. Esta función debe aceptar un ID de usuario y una función de callback. Luego,
dentro de la función, debes simular una solicitud a una API y, cuando se complete, llamar a la
función de callback con los datos del usuario.
*/
function obtenerDatosUsuario(idUsuario, callback){
    let userData = retrieveUserData(idUsuario);
    callback(userData);
}

// """CALL TO API"""
function retrieveUserData(ID){
    const users = [{id: 1, name: "uno"}, {id: 2, name: "dos"}, {id: 3, name: "tres"}];
    return users.find(item => ID === item.id);
}

// obtenerDatosUsuario(3, console.log);

/*
EJ 5:
Modifica el ejercicio 4 para que en lugar de utilizar callbacks, utilice promesas para manejar la
solicitud de datos de usuario.
*/
