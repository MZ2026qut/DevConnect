const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// 1. Load environment variables first
dotenv.config({ path: __dirname + '/.env' });

// 2. Initialize the Express app object
const app = express();

// 3. Apply the middlewares in the correct order
app.use(cors());
app.use(express.json());

// 4. Set up the API routes
app.use('/api/auth', require('./routes/authRoutes'));
//app.use('/api/tasks', require('./routes/taskRoutes'));

console.log("--- DEBUGGING ENV LOAD ---");
console.log("Current Directory:", __dirname);
console.log("Parsed Secret Key Key:", process.env.JWT_SECRET);

// 5. Connect to DB and Start the server
if (require.main === module) {
    connectDB();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;