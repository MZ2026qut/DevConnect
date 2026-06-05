// server.js

// 1. Load environment variables
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });

// 2. Import remaining dependencies safely
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));

console.log("--- DEBUGGING ENV LOAD ---");
console.log("Current Directory:", __dirname);
console.log("Parsed Secret Key:", process.env.JWT_SECRET);

// Run database and start server unconditionally
connectDB();
const PORT = process.env.PORT || 80; 
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));

module.exports = app;
