const studentRepository = () => {
    let studentList = [];

    return {
        addStudent: (student) => {
            // validations here
            studentList.unshift(student);
        },

        getStudent: (nombre) => {
            studentList.find(student => student.nombre === nombre);
        },

        removeStudent: (student) => {
            const i = studentList.indexOf(student);
            if(i === -1) return false;

            studentList.splice(i, 1);
            return true;
        }
    }
}