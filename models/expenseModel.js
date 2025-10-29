const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema(
    {
        description: {
            type:String,
            required: true,
            trim:true,
            maxLength:100,
        },
        amount: {
            type:Number,
            required:true,
            min: 0.01,
        },
        category :{
            type:String,
            required: true,
            enum : [
                "Food",
                "Transportation",
                "Shopping",
                "Bills",
                "Healthcare",
                "Other",
            ],
        },
        date:{
            type:Date,
            default: Date.now,
        },
        notes : {
            type:String,
            trim:true,
            maxLength:500,
        },
    },
    {timestamps:true}
);