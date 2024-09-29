class StudentRepository {

    /**
     * @type {Map<number, Student>}
     */
    #students;
  
    constructor() {
      this.#students = new Map();
    }
  
    getStudent(id) { 
      return this.#students.get(id);
    }
  
    addStudent(student) {
      this.#students.set(student.id, student);
    }
  
    deleteStudent(id) {
      if(this.#students.has(id)){
        this.#students.delete(id);
        return true
      }else{
        return false;
      }
    }
  }
