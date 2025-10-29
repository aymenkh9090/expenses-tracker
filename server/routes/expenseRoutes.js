const express = require('express');
const expenseRouter = require('../controllers/expenseController');
const router = express.Router();

router.get('/',expenseRouter.getAllExpense);




module.exports = router;

