const Admin = require('../../../models/admin/authAdmin');
exports.createAdmin = async (req, res) => {

    const token = { email: req.body.email};
    const admin = await Admin.findOne(token);
    try {
        if (!admin) {
            const admin = await Admin.create(req.body);
            res.status(201).json({
                status: 'success',
                message: 'Admin created successfully',
                data: {
                    admin
                }
            })
        } else {
            res.status(400).json({
                status: 'fail',
                message: 'Admin already exists'
            })
        }
    }
    
    catch (err) {
        res.status(501).json({
            status: 'fail',
            message: "Internal server error",
        })
    }
}

exports.loginAdmin = async (req, res) => {
    const token = { email: req.body.email, password: req.body.password };
    const admin = await Admin.findOne(token);
    try {
        if (!admin) {
            res.status(404).json({
                status: 'fail',
                message: 'Admin not found'
            })
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Admin logged in successfully',
                data: {
                    admin
                }
            })
        }
    }
    catch (err) {
        res.status(501).json({
            status: 'fail',
            message: "Internal server error"
        })

    }
    
}