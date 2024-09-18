const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
  name: { type: String, required: true },
  createdBy: {type: String},
  isActive: { type: Boolean },
  columns: [{"name":String, "tasks":[]}],
  
});

module.exports = mongoose.model('Board', BoardSchema);

