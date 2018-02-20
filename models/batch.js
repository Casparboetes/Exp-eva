// models/batch.js
const mongoose = require('../config/database')
const { Schema } = mongoose

const batchSchema = new Schema({
  batchNum: { type: Number, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true }
})

module.exports = mongoose.model('batches', batchSchema)
