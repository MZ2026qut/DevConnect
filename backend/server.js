// server.js

// 1. Load environment variables
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });

// 2. Import dependencies
const express = require('express');
const cors = require('cors');
const path = require('path'); // IMPORTED: Required to safely navigate folders
const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

// HEALTH CHECK: Moved to /api/health so the root route '/' can serve your website UI
app.get('/api/health', (req, res) => {
    res.status(200).json({ 
        message: "DevConnect Backend API is live and running!", 
        status: "connected" 
    });
});

// 3. API Routes
app.use('/api/auth', require('./routes/authRoutes'));

// 4. SERVE STATIC FRONTEND FILES (Academic Single-Box Setup)
// This links the Express engine to your compiled Create React App folder
app.use(express.static(path.join(__dirname, '../frontend/build')));

// 5. FALLBACK ROUTE: Redirects any standard browser navigation back to the React UI
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

console.log("--- DEBUGGING ENV LOAD ---");
console.log("Current Directory:", __dirname);
console.log("Parsed Secret Key:", process.env.JWT_SECRET);

// Run database and start server unconditionally
connectDB();
const PORT = process.env.PORT || 80; 
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));

module.exports = app;
