let list = null;
let current = null;
for(let i=0; i <= 10; i++){
    
    let newNode = {
        value: i,
        next: null
    };

    if(list === null){
        list = newNode;
        current = newNode;
    }else{
        current.next = newNode;
        current = newNode;
    }
}

// while(list != null){
//     console.log(list.value);
//     list = list.next;
// }

function listToArray(list, array = []){
    if(list === null) return array;

    array.push(list.value);
    return listToArray(list.next, array);
}

console.log(listToArray(list));