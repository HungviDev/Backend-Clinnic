const validateCreateUser = (req, res, next) => {
    const {
        full_name,
        email,
        password
    } = req.body;

    if (!full_name || !email || !password) {
        return res.status(400).json({
            message: 'Missing required fields'
        });
    }

    next();
};

module.exports = {
    validateCreateUser
};