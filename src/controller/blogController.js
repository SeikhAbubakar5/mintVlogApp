const blogService = require("../Service/blogService");


const addBlog = async (req, res) => {
    try {
        const { title,image,content,subheading } = req.body;
        const userId = req.user.id;
        const blog = await blogService.createBlog({ title,image,content,subheading, userId });
        
        res.status(201).json({ blog });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getAllBlogs = async (req, res) => {
    try {
        const userId = req.user.id;
        const blogs = await blogService.getAllBlogs(userId);
        
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getBlogById = async (req, res) => {
    try {
        const { id } = req.params; 
        const blog = await blogService.getBlogById(id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found." });
        }

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addBlog, getAllBlogs, getBlogById };
