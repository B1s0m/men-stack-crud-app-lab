const Blog = require("./models/blog");


async function createBlog() {
  try {
    const newBlog = await Blog.create({
     name: "abo Ali",
     instructions: "bake at 181C",
     prepTime: 100,
     difficulty: "Hard"
    });

    console.log(newBlog);
  } catch (err) {
    console.log("Failed to create Blog. ", err);
  }
}

async function getAllBlogs() {
    try {
        const allBlogs = await Blog.find(); // Gets all the books from the database
        allBlogs.forEach((n)=>{
            
            console.log(`${n.name} is an ${n.difficulty} Blog and takes ${n.prepTime} minutes to prepare`);
            
        })
    } catch (err) {
        console.log("Failed to  find Blog: ", err);
    }
}

async function getBlogById(id)
 {
    try {
        const findBlogsbyid = await Blog.findById(id); // Gets all the books from the database
       if(findBlogsbyid ===null)
        console.log("No Blog with this ID exists.");
    else{
        console.log(findBlogsbyid);

    }
    } catch (err) {
        console.log("there is error ", err);
    }
}

async function uupdateBlog(BlogId, newBlogData) {
   try {
    const updatedBlog= await Blog.findByIdAndUpdate(
    BlogId,newBlogData,{ new: true }
  );
  console.log(updatedBlog);
} catch (error) {
       console.log("Failed to  updata Blog: ", error);
    
   }
    
}


async function deleteBlog(BlogId) {
try {
    const deleteBlog = await Blog.findByIdAndDelete(BlogId);
      console.log("Blog successfully deleted.")
    } catch (error) {
        console.log(" Failed to  deleted Blog: . " ,error)
        
}{
}}


const practiceDatabaseMethods= {
      deleteBlog , uupdateBlog ,getBlogById, getAllBlogs ,createBlog
}
module.exports = practiceDatabaseMethods;