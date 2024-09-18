// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

// Create an Express application
const app = express();

// Middleware setup
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "PUT", "DELETE", "POST"],
  credentials: true,
}));
app.use(express.json()); // Parse JSON request bodies

// Access environment variables
const PORT = process.env.PORT || 5000;
const url = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define and use routes
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const boardRoutes = require('./routes/boardRoutes');

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/boards', boardRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'FrontEnd', 'build')));

// Catch all other routes and return the React index file
/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'FrontEnd', 'build', 'index.html'));
});
*/
// Basic route
app.get('/test', (req, res) => res.send('API is running...'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});