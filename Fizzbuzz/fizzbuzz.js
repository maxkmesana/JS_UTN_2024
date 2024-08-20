
for(let i=1; i<=100; i++){
    let string = "";

    if(i % 3 == 0){
        string += "Fizz";
    }
    if(i % 5 == 0){
        string += "Buzz";
    }
    if(string === ""){
        string += "Neither"
    }
    console.log(i + ": " + string);
}