module.exports = () => {

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
}
