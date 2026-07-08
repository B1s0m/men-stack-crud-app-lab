const express = require("express") //importing express package
const app = express() // creates a express application
 const connectToDatabasef=require("./db")

 const practiceDatabaseMethods = require("./recipeUtils");

// const students = require('./data')

app.use(express.static('public')) // serves all static files from public folder





// Routes go here

app.get('/',(req,res)=>{
    res.render('homepage.ejs',{
        name: 'Omar',
        grade:50,
        courses: ['Science','Object Oriented', 'Calculus']
    })
})


app.get('/createBlog',(req,res)=>{
    res.render('createBlog.ejs') // never add / in beggening of render method
})





app.listen(3000,()=>{
    console.log('App is Running')
}) // listen on port 3000