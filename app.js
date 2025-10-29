const express = require('express'); 
const expenseRoutes = require('./routes/expenseRoutes');
const app = express();

app.use('/api/v2/expense',expenseRoutes);



module.exports = app;