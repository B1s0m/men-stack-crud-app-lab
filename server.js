const express = require("express") //importing express package
const app = express() // creates a express application
const connectToDatabasef=require("./db")
const mongoose = require("mongoose");
const Blog=require('./models/blog')
const DataBlog=require("./models/dataBlogs")
app.use(express.static('public')) // serves all static files from public folder

app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false }));


connectToDatabasef.connectToDatabase()



// DataBlog.sendData()



app.get('/', async(req,res)=>{
    try {
        
        BlogFound=await Blog.find()
        // console.log(BlogFound)
        res.render('homepage.ejs',{BlogFound})

    } catch (error) {
        console.log("error in found Blogs"+error)
    }
})


app.get('/createBlog',(req,res)=>{
    res.render('createBlog.ejs') // never add / in beggening of render method
})


app.post('/blogs', async (req,res)=>{

    try{
    console.log(req.body)
    req.body.published=Boolean(req.body.published)
    console.log( req.body.published)

    const createdBlog = await Blog.create(req.body)
    console.log(createdBlog._id)
    res.redirect('/')

    }
    catch(err){
        console.log(err)
    }
    
})










app.listen(3000,()=>{
    console.log('App is Running')
}) // listen on port 3000