const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: 'User'},
  deadline: { type: Date }, // New field for deadline
  status: { 
    type: String,
     default: 'Todo' ,
    enum: ["Todo","Doing","Done"]}, // New field for task status
  subtasks: { type : Array} // New field for subtasks (embedded documents)
},{ timestamps:true}
);

module.exports = mongoose.model('Task', TaskSchema);

