const Blog = require('./../../../models/admin/blogModel');

exports.createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        console.log(blog);
        res.status(201).json({
            status: 'success',
            message: 'Blog added successfully',
            data: {
                blog
            }
        })
    } catch (err) {
        res.status(501).json({
            status: 'failed',
            message: 'Internal server err',
            err:err
        })
    }
}

exports.findBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (blog) {
            res.status(200).json({
                status: 'success',
                message: 'Blog found successfully with the help of id',
                data: {
                    blog
                }
            })
        } else {
            res.status(404).json({
                status: 'failed',
                message:'Blog not found by this id'
            })
        }
    } catch (err) {
        res.status(501).json({
            status: 'failed',
            message:'Internal server error'
        })
    }
}


exports.findBlogByName = async (req, res) => {
    try {
        const blog = await Blog.findOne(req.params.name);
        console.log(blog);
        res.status(200).json({
          status: 'success',
          message: 'Blog found successfully with the help of id',
          data: {
            blog,
          },
        });
    } catch (err) {
        res.status(501).json({
          status: 'failed',
          message: 'Internal server error',
        });
    }
}

exports.updateBlog = async (req, res) => {
    try {
        const updateBlog = {
            title: req.body.title || course.title,
            tagLine: req.body.tagLine || course.tagLine,
            writer: req.body.writer || course.writer,
            content: req.body.content || course.content
        }
        const blog = await Blog.findByIdAndUpdate(req.params.id, updateBlog);
        res.status(200).json({
            status: 'success',
            message: 'Blog updated successfully',
            data: {
                blog
            }
         })
    } catch (err) {
        res.status(501).json({
          status: 'failed',
          message: 'Internal server error',
        });
    }
}


exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (blog) {
            res.status(200).json({
                status: 'success',
                message: 'Blog deleted successfully',
                data: {
                    blog
                }
            })
        } else {
             res.status(404).json({
               status: 'failed',
               message: 'Blog not found',
             });
        }
    } catch (err) {
        res.status(501).json({
          status: 'failed',
          message: 'Internal server error',
        });
    }
}