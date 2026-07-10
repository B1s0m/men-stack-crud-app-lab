const Blog = require("./blog");

const blogs = [
  {
    title: "Getting Started with JavaScript",
    author: "John Smith",
    category: "Programming",
    content:
      "JavaScript is one of the most popular programming languages. It is used to build interactive websites, web applications, and even servers using Node.js.",
    published: true,
  },

  {
    title: "Top 10 Travel Destinations",
    author: "Sarah Johnson",
    category: "Travel",
    content:
      "Traveling allows you to explore different cultures and create unforgettable memories. Here are ten amazing places you should visit.",
    published: true,
  },

  {
    title: "Healthy Eating Tips",
    author: "Emily Brown",
    category: "Food",
    content:
      "Eating fresh fruits, vegetables, and drinking enough water can greatly improve your overall health and energy levels.",
    published: false,
  },

  {
    title: "The Future of Artificial Intelligence",
    author: "Michael Lee",
    category: "Technology",
    content:
      "Artificial Intelligence is changing industries such as healthcare, education, and transportation by automating complex tasks.",
    published: true,
  },

  {
    title: "How to Stay Productive While Studying",
    author: "David Wilson",
    category: "Education",
    content:
      "Create a study schedule, remove distractions, and take regular breaks to improve focus and learning efficiency.",
    published: true,
  },

  {
    title: "Morning Habits for Success",
    author: "Sophia Davis",
    category: "Lifestyle",
    content:
      "Waking up early, exercising, and planning your day can help you become more productive and achieve your goals.",
    published: false,
  }
];





async function sendData() {
  await Blog.insertMany(blogs);
  console.log("Database seeded!");
}





module.exports = {sendData};