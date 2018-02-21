// routes/students.js
const router = require('express').Router()
const passport = require('../config/auth')
const { Student } = require('../models')
const processMove = require('../lib/processMove')
// const tesktRandomizer = require('../lib/tesktRandomizer')


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
    .get('/students/:id', (req, res, next) => {
      const id = req.params.id

      Student.findById(id)
        .then((student) => {
          if (!student) { return next() }
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
