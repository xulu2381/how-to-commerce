const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please provide name, email, and password'
    });
  }

  if (name.length < 2 || name.length > 50) {
    return res.status(400).json({
      status: 'fail',
      message: 'Name must be between 2 and 50 characters'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please provide a valid email'
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      status: 'fail',
      message: 'Password must be at least 6 characters'
    });
  }

  if (password.length > 128) {
    return res.status(400).json({
      status: 'fail',
      message: 'Password is too long'
    });
  }

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please provide email and password'
    });
  }

  next();
};

module.exports = { validateRegister, validateLogin };
