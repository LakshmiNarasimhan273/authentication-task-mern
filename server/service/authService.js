const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return reject(err); // Reject with the error
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          return reject(err); // Reject with the error
        }
        resolve(hash);
      });
    });
  });
};

const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};

module.exports = {
  hashPassword,
  comparePassword,
};
