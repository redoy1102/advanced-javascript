const students = [
    {id:5, name: 'Joy'},
    {id:21, name: 'Redoy'},
    {id:41, name: 'Riya'},
    {id:51, name: 'Tonni'},
];
const student = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger10 = students.filter(s => s.id > 10);
console.log(bigger10);
// console.log(ids);
// console.log(student);
