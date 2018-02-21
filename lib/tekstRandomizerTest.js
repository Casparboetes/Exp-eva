
// Test by runnning just this file through node in your terminal
const totalStudents = [
  {
    "studentName": "Arthur Zeeman",
    "photo": "http://via.placeholder.com/500x180?text=No%20Image",
    "batchNum": "1",
    "green": true,
    "yellow": false,
    "red": false,
    "remark": "Remarks...",
    "evaluationDate": "01/29/2018"
  },
  {
  "studentName": "Jan Visser",
  "photo": "http://via.placeholder.com/500x180?text=No%20Image",
  "batchNum": "1",
  "green": true,
  "yellow": false,
  "red": false,
  "remark": "Remarks...",
  "evaluationDate": "01/29/2018"
 },
  {
    "studentName": "Klaas Zwager",
    "photo": "http://via.placeholder.com/500x180?text=No%20Image",
    "batchNum": "1",
    "green": true,
    "yellow": false,
    "red": false,
    "remark": "Remarks...",
    "evaluationDate": "01/29/2018"
  },
  {
    "studentName": "Marije Tekstra",
    "photo": "http://via.placeholder.com/500x180?text=No%20Image",
    "batchNum": "1",
    "green": false,
    "yellow": true,
    "red": false,
    "remark": "Remarks...",
    "evaluationDate": "01/29/2018"
  },
  {
    "studentName": "Boris Boetes",
    "photo": "http://via.placeholder.com/500x180?text=No%20Image",
    "batchNum": "1",
    "green": false,
    "yellow": true,
    "red": false,
    "remark": "Remarks...",
    "evaluationDate": "01/29/2018"
  },
  {
  "studentName": "Caspar Boetes",
  "photo": "http://via.placeholder.com/500x180?text=No%20Image",
  "batchNum": "1",
  "green": false,
  "yellow": true,
  "red": false,
  "remark": "Remarks...",
  "evaluationDate": "01/29/2018"
 },
  {
    "studentName": "Piet Heyn",
    "photo": "http://via.placeholder.com/500x180?text=No%20Image",
    "batchNum": "1",
    "green": false,
    "yellow": false,
    "red": true,
    "remark": "Remarks...",
    "evaluationDate": "01/29/2018"
  },
  {
    "studentName": "Johan Strater",
    "photo": "http://via.placeholder.com/500x180?text=No%20Image",
    "batchNum": "1",
    "green": false,
    "yellow": false,
    "red": true,
    "remark": "Remarks...",
    "evaluationDate": "01/29/2018"
  },
  {
    "studentName": "Ben Ziggo",
    "photo": "http://via.placeholder.com/500x180?text=No%20Image",
    "batchNum": "1",
    "green": false,
    "yellow": false,
    "red": true,
    "remark": "Remarks...",
    "evaluationDate": "01/29/2018"
  },
  {
  "studentName": "Alexander Max",
  "photo": "http://via.placeholder.com/500x180?text=No%20Image",
  "batchNum": "2",
  "green": true,
  "yellow": false,
  "red": false,
  "remark": "Remarks...",
  "evaluationDate": "01/29/2018"
 },
  {
    "studentName": "Freek de Jonge",
    "photo": "http://via.placeholder.com/500x180?text=No%20Image",
    "batchNum": "2",
    "green": true,
    "yellow": false,
    "red": false,
    "remark": "Remarks...",
    "evaluationDate": "01/29/2018"
  },
  {
    "studentName": "John Moe",
    "photo": "http://via.placeholder.com/500x180?text=No%20Image",
    "batchNum": "1",
    "green": true,
    "yellow": false,
    "red": false,
    "remark": "Remarks...",
    "evaluationDate": "01/29/2018"
  },
  {
    "studentName": "Jan Alleman",
    "photo": "http://via.placeholder.com/500x180?text=No%20Image",
    "batchNum": "2",
    "green": true,
    "yellow": false,
    "red": false,
    "remark": "Remarks...",
    "evaluationDate": "01/29/2018"
  },
  {
  "studentName": "Alexander Min",
  "photo": "http://via.placeholder.com/500x180?text=No%20Image",
  "batchNum": "3",
  "green": true,
  "yellow": false,
  "red": false,
  "remark": "Remarks...",
  "evaluationDate": "01/29/2018"
 },
  {
    "studentName": "Freek de Ouwuh",
    "photo": "http://via.placeholder.com/500x180?text=No%20Image",
    "batchNum": "3",
    "green": false,
    "yellow": false,
    "red": true,
    "remark": "Remarks...",
    "evaluationDate": "01/29/2018"
  },
  {
    "studentName": "John Mo",
    "photo": "http://via.placeholder.com/500x180?text=No%20Image",
    "batchNum": "3",
    "green": false,
    "yellow": true,
    "red": false,
    "remark": "Remarks...",
    "evaluationDate": "01/29/2018"
  },
  {
    "studentName": "Jan Niemands Vriend",
    "photo": "http://via.placeholder.com/500x180?text=No%20Image",
    "batchNum": "3",
    "green": true,
    "yellow": false,
    "red": false,
    "remark": "Remarks...",
    "evaluationDate": "01/29/2018"
  }
]


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

var times = 1000000
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
