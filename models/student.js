const mongoose = require('../config/database')
const { Schema } = mongoose

const studentSchema = new Schema({
  studentName: { type: String, required: true },
  photo: { type: String, default: 'http://via.placeholder.com/500x180?text=No%20Image' },
  batchNum: { type: Number, required: true },
  green: { type: Boolean, default: false },
  yellow: { type: Boolean, default: false },
  red: { type: Boolean, default: true },
  remark: { type: String, required: false },
  evaluationDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('students', studentSchema)
