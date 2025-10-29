
const app = require('./app');
require('dotenv').config();
const connectDB = require('./config/db') 


// DATABASE CONNECTION
connectDB();

const port = process.env.PORT || 8001;
app.listen(port,()=>{
    console.log("Server is running on port " , port);
});
