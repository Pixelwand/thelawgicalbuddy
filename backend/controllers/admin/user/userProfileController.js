const User = require('../../../models/users/authModel');

//adding an user to the platform
exports.createUser = async (req, res) => {  
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      message: "Profile created successfully",
      data
        : {
        user
      }
    })
  } catch (err) {
        res.status(501).json({
          status: 'fail',
          message: err
        });
    }
}

//getting all the users in admin dashboard
exports.getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({
        status: 'success',
        message: "All users",
        data: {
          users
        }
      })
    } catch (err) {
      res.status(501).json({
        status: 'fail',
        message: err
      });
    }
}

//getting the user by using id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      message: "User found",
      data: {
        user
      } 
    })
  } catch (err) {
    res.status(501).json({
      status: 'fail',
      message: err
    });
    }
}


//updating users using id
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = {
      name: req.body.name || user.name,
      email: req.body.email || user.email,
      password: req.body.password || user.password,
      number: req.body.number || user.number,

    }
    const user = await User.findByIdAndUpdate(req.params.id);
    res.status(200).json({
      status: 'success',
      message: "User updated successfully",
      data: {
        user
      } 
    })
  } catch (err) {
    res.status(501).json({
      status: 'fail',
      message: err
    });
  }
};

//deleting users using id
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      message: "User deleted successfully",
      data: {
        deletedUser
      }
    })
  } catch (err) {
    res.status(501).json({
      status: 'fail',
      message: err
    });
  }
};