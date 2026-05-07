const roleService = require('./role.service');

const getAllRoles = async (req, res) => {
    try {
        const roles = await roleService.getRoles();

        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const createRole = async (req, res) => {
    try {
        await roleService.createRole(
            req.body.name
        );

        res.status(201).json({
            message: 'Create role success'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getAllRoles,
    createRole
};