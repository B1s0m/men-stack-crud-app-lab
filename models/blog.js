const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    author: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Technology",
        "Programming",
        "Education",
        "Travel",
        "Food",
        "Lifestyle",
        "Other",
      ],
      default: "Other",
    },

    content: {
      type: String,
      required: true,
    },


    published: {
      type: Boolean,
    
    },
  },
  {
    timestamps: true,
  }
);


const Blogs=mongoose.model("Blog", blogSchema);
module.exports = Blogs