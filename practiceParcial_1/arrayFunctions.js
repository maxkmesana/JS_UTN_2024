const students = [
    {
      name: 'Juan',
      id: 1,
      grade: 7
    },
    {
      name: 'Pedro',
      id: 2,
      grade: 4
    },
    {
      name: 'Carlos',
      id: 3,
      grade: 8
    },
    {
      name: 'Ana',
      id: 4,
      grade: 9
    },
    {
      name: 'Maria',
      id: 5,
      grade: 6
    }
  ];

const processedStudents = students.map(student => ({...student}))
.sort((a,b) => a.name.localeCompare(b.name));

const aprobados = processedStudents.filter((student) => student.grade >= 6);
const desaprobados = processedStudents.filter((student) => student.grade < 5);

let promedio = processedStudents.reduce((accumulator, currentObject) => accumulator + currentObject.grade, 0) / processedStudents.length;

console.log(promedio.toFixed(2));