const express = require("express") //importing express package
const app = express() // creates a express application
const connectToDatabasef = require("./db")
const mongoose = require("mongoose");
const Blog = require('./models/blog')
const DataBlog = require("./models/dataBlogs");
const { render } = require("ejs");
app.use(express.static('public')) // serves all static files from public folder

app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false }));


connectToDatabasef.connectToDatabase()


// this for add data in database
// DataBlog.sendData()



app.get('/', async (req, res) => {
    try {
        BlogFound = await Blog.find()
        res.render('homepage.ejs', { BlogFound })
    } catch (error) {
        console.log("error in found Blogs" + error)
    }
})


app.get('/createBlog', (req, res) => {
    res.render('createBlog.ejs',{ Blog: null})
})


app.get('/:id', async (req, res) => {
    try {
        oneBlogFound = await Blog.findById(req.params.id)
        res.render('datilesBlog.ejs', { Blog: oneBlogFound })
    } catch (error) {
        console.log("error in found Blogs" + error)
    }
})



app.post('/:id/delete', async (req, res) => {

    try {
        const deleteBlog = await Blog.findByIdAndDelete(req.params.id)
        res.redirect('/')
    }
    catch (err) {
        console.log("Delete Problem : " + err)
    }


})

app.get('/:id/update', async (req, res) => {


    console.log(req.params.id);
    oneBlogFound = await Blog.findById(req.params.id)
    res.render('createBlog.ejs', { Blog: oneBlogFound })         
    


})




app.post('/blogs', async (req, res) => {

    try {
        // console.log(req.body)
        req.body.published = Boolean(req.body.published)
        // console.log( req.body.published)

        const createdBlog = await Blog.create(req.body)
        // console.log(createdBlog._id)
        res.redirect('/')

    }
    catch (err) {
        console.log(err)
    }


})
app.post('/blogs/update/:id', async (req, res) => {

    try {
        // console.log(req.body)
        req.body.published = Boolean(req.body.published)
        // console.log( req.body.published)
         console.log(req.body);
        // const createdBlog = await Blog.create(req.body)
        // console.log(createdBlog._id)
        res.redirect('/')

    }
    catch (err) {
        console.log(err)
    }


})










app.listen(3000, () => {
    console.log('App is Running')
}) // listen on port 3000