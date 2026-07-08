const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const Recipe = require("./models/blog");
async function connectToDatabase(){
    try{
    await mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
    console.log('Connected to Database"')

    }
    catch(er){
        console.log('Connection failed: ', er)
    }
   
}
module.exports={connectToDatabase};