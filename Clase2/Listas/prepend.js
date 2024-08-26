// populate list
function prepend(list, element){
    if(list === null){
        list.next = element;
    }else{
        let tempElement = list.next;
        list.next = element;
        element.next = tempElement;
    }
}

let list = null;

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

prepend(list, {value: 128, next: null});

while(list != null){
    console.log(list.value);
    list = list.next;
}

