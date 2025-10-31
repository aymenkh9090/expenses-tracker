const express = require('express'); 
const cors = require("cors");
const expenseRoutes = require('./routes/expenseRoutes');
const app = express();

// Mideleware
app.use(express.json());
app.use(cors());


// API routes
app.use('/api/v2/expense',expenseRoutes);



module.exports = app;