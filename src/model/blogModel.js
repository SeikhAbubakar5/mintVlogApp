const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
        trim: true
    },
    image: { 
        type: String,  // URL of the image
        required: true
    },
    subheading: {  
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
   
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
