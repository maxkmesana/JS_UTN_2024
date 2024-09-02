// Crear un programa que simule una lista de tareas (`to-do list`) utilizando objetos y arrays.
// Debe permitir agregar tareas, marcar tareas como completadas y listar las tareas pendientes.

class Tarea{
    constructor(nombre, descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.isCompletada = false;
    }

    toggleIsCompletada(){
        if(this.isCompletada === true){
            this.isCompletada = false;
        }else{
            this.isCompletada = true;
        }
    }

    setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    setDescripcion(nuevaDescripcion){
        this.nombre = nuevaDescripcion;
    }
}

class ToDoList{
    constructor(){
        this.lista = [];
    }

    // agregar, eliminar, actualizar?
    buscarIndex(nombre){
        if(typeof nombre === "string"){
            return this.lista.findIndex(element => element.nombre === nombre);
        }
    }

    agregar(tarea){
        if(typeof tarea === "object"){
            this.lista.push(tarea)
        }
    }

    eliminar(index){
        if(typeof index === "number"){
            this.lista.splice(index, 1);
        }
    }
}

let toDoList = new ToDoList();
let tarea1 = new Tarea("primera tarea", "test uno");
let tarea2 = new Tarea("segunda tarea", "test dos");

toDoList.agregar(tarea1);
toDoList.agregar(tarea2);

console.log(toDoList.lista[0], toDoList.lista[1]);

toDoList.eliminar(toDoList.buscarIndex("primera tarea"));
console.log(toDoList.lista[0], toDoList.lista[1]);
