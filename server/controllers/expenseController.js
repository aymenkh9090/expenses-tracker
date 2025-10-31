const Expense = require('./../models/expenseModel')

exports.getAllExpense = async (req,res) => {
    try {
        const expense = await Expense.find();
        res.json({
            succes:true,
            count : (await expense).length,
            data: expense
        });        
    } catch (error) {
        res.status(500).json({
            succes : false ,
            message: error.message
        });
    } 
};

exports.createExpense = async(req,res)=>{
    try {
        const {description, amount, category , date, notes } = req.body;
        const expense = new Expense({description,amount,category,date,notes});
        const newExpense = await expense.save();
        res.status(201).json({
            succes:true,
            data:newExpense
        });
    } catch (error) {
        res.status(500).json({succes:false,message:error.message});
    }
};

exports.updateExpense = async (req,res) => {
    try {
            const updateExpense = await Expense.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new:true, runValidators:true}
            );
            if(!updateExpense)
                return res.status(404).json({succes:false,message:"Not Found"});

            res.json({succes:true , data:updateExpense});
    } catch (error) {
        res.status(500).json({
            succes:false,
            message:error.message
        });
    }
};

exports.deleteExpense = async(req,res)=>{
    try {
        const deletedExpense = await Expense.findByIdAndDelete(req.params.id);

        if(!deletedExpense) return res.status(404).json({succes:false,message:"Not Found"});
        res.status(500).json({succes:true,message:"Deleted Succesfully"});
          
    } catch (error) {
        res.status(500).status({succes:false,message:error.message});
    }
}