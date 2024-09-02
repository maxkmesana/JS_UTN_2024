export class Medicament{
    constructor(id, name, price, stock){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    
    get getId(){
        return this.id;
    }

    get getName(){
        return this.name;
    }

    get getPrice(){
        return this.price;
    }

    get getStock(){
        return this.stock;
    }
    
    /**
     * @param {number} id
     */
    set setId(id){
        if(typeof id === "number"){
            this.id = id;
        }
    }

    /**
     * @param {string} name
     */
    set setName(name){
        if(typeof name === "string"){
            this.name = name;
        }
    }

    /**
     * @param {number} price
     */
    set setPrice(price){
        if(typeof price === "number"){
            this.price = price;
        }
    }
    
    /**
     * @param {number} stock
     */
    set setStock(stock){
        if(typeof stock === "number"){
            this.stock = stock;
        }
    }

    showDetails(){
        console.log("--------MED---------");
        console.log(`ID: ${this.id}`);
        console.log(`Nombre: ${this.name}`);
        console.log(`Precio: ${this.price}`);
        console.log(`Stock: ${this.stock}`);
        console.log("--------------------");
    }
}

