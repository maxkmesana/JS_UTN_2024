let array = [1,2,3,4,5,6,7,8,9];

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

let linkedListHead = arrayToList(array);
while(linkedListHead !== null){
    console.log(linkedListHead.value);
    linkedListHead = linkedListHead.next
}
