const jwt = require('jsonwebtoken');

const authMiddleware = async (req,res,next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if(!token) {
            return res.status(401).json({message: 'Unauthorized'});
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                return res.status(401).json({message: 'Unauthorized'});
            }
            req.payload = decoded;
            next();
        })
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'});
}
}