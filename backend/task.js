const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema(
  {
    userId: {
      type: Object,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      default: 'title',
      trim: true
    },
    dueDate: {
      type: Date,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      default: 'category',
      trim: true
    },
    status: {
      type: String,
      default: 'status',
      trim: true
    },
    timeEst: {
      type: Number,
      trim: true
    },
    body: {
      type: String,
      default: 'body',
      trim: true
    }
  },
  { collection: 'tasks' }
)

// const Task = mongoose.model("Task", taskSchema);
// module.exports = Task;

module.exports = taskSchema
