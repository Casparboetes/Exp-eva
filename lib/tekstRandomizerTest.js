// Test by runnning just this file through node in your terminal
function tekstRandomizer(studentList) {
  let student

  const redStudents = studentList.filter(student => student.red)
  const yellowStudents = studentList.filter(student => student.yellow)
  const greenStudents = studentList.filter(student => student.green)

  const randomRed = redStudents[Math.floor(Math.random()*redStudents.length)]
  const randomYellow = yellowStudents[Math.floor(Math.random()*yellowStudents.length)]
  const randomGreen = greenStudents[Math.floor(Math.random()*greenStudents.length)]

  const randomStudent = Math.random() * 100

  if (randomStudent < 18) {
      student = randomGreen
    } else if (randomStudent < 51) {
        student = randomYellow
    } else {
      student = randomRed
    }

  return student
}

console.log(tekstRandomizer(totalStudents))

var checkList = []

var times = 100000
for(var i=0; i < times; i++){
    checkList.push(tekstRandomizer(totalStudents))
}

const redStudents = checkList.filter(student => student.red)
const yellowStudents = checkList.filter(student => student.yellow)
const greenStudents = checkList.filter(student => student.green)

const percentageRed = redStudents.length / checkList.length * 100
const percentageYellow = yellowStudents.length / checkList.length * 100
const percentageGreen = greenStudents.length / checkList.length * 100

console.log(percentageGreen)
console.log(percentageYellow)
console.log(percentageRed)
