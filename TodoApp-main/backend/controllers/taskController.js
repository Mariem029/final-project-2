const Task = require('../modules/Task');

// Create a new task
exports.createTask = async (req, res) => {
  const { title, description, deadline } = req.body;
  console.log(req.body)
  const userId = req.body.userId;

  try {
    const task = new Task({ title, description, deadline, userId });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create task' });
  }
};

// Get all tasks for a user
exports.getTasks = async (req, res) => {
  const userId = req.user.id;

  try {
    const tasks = await Task.find({ userId }).sort({ deadline: 1 }); // Sort tasks by deadline
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tasks' });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, deadline, status } = req.body;
  const userId = req.user.id;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: id, userId }, // Ensure the task belongs to the user
      { title, description, deadline, status },
      { new: true } // Return the updated task
    );

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update task' });
  }
};

// Delete a task (if needed)
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const task = await Task.findOneAndDelete({ _id: id, userId });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};