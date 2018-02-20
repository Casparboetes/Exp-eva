// routes/batches.js
const router = require('express').Router()
const passport = require('../config/auth')
const { Batch } = require('../models')

const authenticate = passport.authorize('jwt', { session: false })

module.exports = io => {
  router
    .get('/batches', (req, res, next) => {
      Batch.find()
        // Newest batches first
        .sort({ createdAt: -1 })
        // Send the data in JSON format
        .then((batches) => res.json(batches))
        // Throw a 500 error if something goes wrong
        .catch((error) => next(error))
    })
    .get('/batches/:id', (req, res, next) => {
      const id = req.params.id

      Batch.findById(id)
        .then((batch) => {
          if (!batch) { return next() }
          res.json(batch)
        })
        .catch((error) => next(error))
    })
    .post('/batches', authenticate, (req, res, next) => {
      const newBatch = {
        userId: req.account._id
      }

      Batch.create(newBatch)
        .then((batch) => {
          io.emit('action', {
            type: 'BATCH_CREATED',
            payload: batch
          })
          res.json(batch)
        })
        .catch((error) => next(error))
    })
  return router
}
