export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  if (password.length < 6) {
    return { valid: false, message: 'Password must be at least 6 characters' };
  }
  if (password.length > 128) {
    return { valid: false, message: 'Password is too long' };
  }
  return { valid: true };
};

export const validateName = (name) => {
  if (name.length < 2) {
    return { valid: false, message: 'Name must be at least 2 characters' };
  }
  if (name.length > 50) {
    return { valid: false, message: 'Name is too long' };
  }
  return { valid: true };
};

export const sanitizeInput = (input) => {
  return input.trim();
};
