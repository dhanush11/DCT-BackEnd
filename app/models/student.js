const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  mobile : {
    type : Number,
    required : true
  },
  batches : [{
    type: Schema.Types.ObjectId,
    ref : 'Batch'
  }]
})

const Student = mongoose.model('Student', studentSchema);

module.exports = {
  Student
}
