function Closure(){
     let privateVariable = 15;

     function minusThree(){
        privateVariable -= 3;
     }
     minusThree();

     return {
        getPrivateVariable: () => {
            return privateVariable;
        },

        addN: (n) => {
            privateVariable += n;
        }
     }
}

const closure = new Closure();

console.log(closure.getPrivateVariable());

closure.addN(5);
console.log(closure.getPrivateVariable());