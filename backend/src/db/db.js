const mongoose = require("mongoose")

async function connectDB(){

    await mongoose.connect(process.env.MONGO_URL)
    console.log(`Connected to the ${process.env.DataBase_Name} successfully !`);
    
}


module.exports = connectDB;