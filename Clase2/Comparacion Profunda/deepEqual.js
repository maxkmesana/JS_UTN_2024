
let obj1 = {campo: "campo_1", objAnidado: {valorAnidado: 100, valorAnidado_2: 200}};
let obj2 = {campo: "campo_2", objAnidado: {valorAnidado: 100, valorAnidado_2: 2300}};

function deepEqual(object1, object2){
    let keysObj1 = Object.keys(object1);
    let keysObj2 = Object.keys(object2);
    let valuesObj1 = Object.values(object1);
    let valuesObj2 = Object.values(object2);



    if(keysObj1.length !== keysObj2.length) return false;

    for(let i = 0; i <= keysObj1.length; i++){
        if(keysObj1[i] !== keysObj2[i]) return false;
        if(typeof valuesObj1[i] !== typeof valuesObj2[i]) return false;
        if(valuesObj1[i] !== valuesObj2[i]) return false;
        
        if(valuesObj1[i] !== null && valuesObj2[i] !== null){
            if(typeof valuesObj1[i] === "object" && typeof valuesObj2[i] === "object"){
                return deepEqual(valuesObj1[i], valuesObj2[i]);
            }
        }
    }
    return true;
}

console.log(deepEqual(obj1, obj2));