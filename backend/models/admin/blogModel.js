const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  tagLine: {
    type: String,
    required: true,
    trim: true,
  },
  writer: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
});

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;