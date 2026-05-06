const authService = require('./auth.service');


const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password) {
      res.status(400).json({ message: 'Please provide email and password' });
      return;
    }
    const data = await authService.loginService(email, password);
    if (!data) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }
    res.status(200).json({ message: 'Login successful', data : data});
}
  catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

const registerController = async (req, res) => {
  try {
    const {
        full_name,
        phone,
        password,
        birth_date,
        address,
        avatar,
        role_id,
        email
    } = req.body;
    if (!full_name || !phone || !password || !birth_date || !address || !email) {
        return res.status(400).json({
                message: 'Missing required fields'
            });
    }
    const data = await authService.register(req.body);
    if(data.success){
      return res.status(200).json({ message: 'Register successful'});
    }
    return res.status(400).json({ message: data.message});
}
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  loginController,
  registerController
}