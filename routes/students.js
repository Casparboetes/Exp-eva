// routes/students.js
const router = require('express').Router()
const passport = require('../config/auth')
const { Student } = require('../models')

const authenticate = passport.authorize('jwt', { session: false })

module.exports = io => {
  router
    .get('/students', (req, res, next) => {
      Student.find()
        // Newest students first
        .sort({ createdAt: -1 })
        // Send the data in JSON format
        .then((students) => res.json(students))
        // Throw a 500 error if something goes wrong
        .catch((error) => next(error))
    })
    .get('/students/batch/:id', (req, res, next) => {
      const id = req.params.id

      Student.find({ batchNum : id })
        .then((student) => {
          if (!student) { return next() }
          res.json(student)
        })
        .catch((error) => next(error))
    })

    .get('/students/batch/:id/random', (req, res, next) => {
      const id = req.params.id

      Student.find({ batchNum : id }) // ASYNCHROON
        .then((studentList) => {
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

            if(student === undefined) {
              student = studentList[Math.floor(Math.random()*studentList.length)]
            }

          res.json(student)
        })
        .catch((error) => next(error))
    })


    .post('/students', authenticate, (req, res, next) => {
      const newStudent = req.body

      Student.create(newStudent)
        .then((student) => {
          io.emit('action', {
            type: 'STUDENT_CREATED',
            payload: student
          })
          res.json(student)
        })
        .catch((error) => next(error))
    })
    .patch('/students/:id', authenticate, (req, res, next) => {
      const id = req.params.id
      const userId = req.account._id.toString()

      Student.findById(id)
        .then((student) => {
          if (!student) { return next() }

          const updatedStudent = processMove(student, req.body, userId)

          Student.findByIdAndUpdate(id, { $set: updatedStudent }, { new: true })
            .then((student) => {
              io.emit('action', {
                type: 'STUDENT_UPDATED',
                payload: student
              })
              res.json(student)
            })
            .catch((error) => next(error))
        })
        .catch((error) => next(error))
    })
    .delete('/students/:id', authenticate, (req, res, next) => {
      const id = req.params.id
      Student.findByIdAndRemove(id)
        .then(() => {
          io.emit('action', {
            type: 'STUDENT_REMOVED',
            payload: id
          })
          res.status = 200
          res.json({
            message: 'Removed',
            _id: id
          })
        })
        .catch((error) => next(error))
    })

  return router
}
