const Blog = require("../model/blogModel");

const createBlog = async (blogData) => {
    try {
        const blog = await Blog.create(blogData);
        return blog;
    } catch (error) {
        throw error;
    }
};


const getAllBlogs = async (userId) => {
    try {
        const blogs = await Blog.find({ userId });
        return blogs;
    } catch (error) {
        throw error;
    }
};

const getBlogById = async (blogId) => {
    try {
        const blog = await Blog.findById(blogId);
        return blog;
    } catch (error) {
        throw error;
    }
};

module.exports = { createBlog, getAllBlogs, getBlogById };
