// print/acces nth element of a list? I suppose?
let array = [0,1,2,3,4,5,6,7,8,9];
function arrayToList(array){
    let head = null;
    let current = null;

    for(let i=0; i<array.length; i++){
        let newNode = {
            value: array[i],
            next: null
        };

        if(head === null){
            head = newNode;
            current = newNode;
        }else{
            current.next = newNode;
            current = newNode;
        }
    }

    return head;
}

let linkedList = arrayToList(array);

function getNth(node, nth, i = 0){

    if(node === null){
        return undefined;
    }

    if(nth === i){
        return node.value;
    }

    return getNth(node.next, nth, i + 1);
}

console.log(getNth(linkedList, 5));