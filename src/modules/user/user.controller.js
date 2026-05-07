const userService = require('./user.service');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getUserDetail = async (req, res) => {
    try {
        const user = await userService.getUserById(
            req.params.id
        );

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const createUser = async (req, res) => {
    try {
        await userService.createUser(req.body);

        res.status(201).json({
            message: 'Create user success'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getAllUsers,
    getUserDetail,
    createUser
};