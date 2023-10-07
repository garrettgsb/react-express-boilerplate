const { getUserWithEmail } = require('./get_user_by_email');

const checkEmail = async (email) => {
  const existingUser = await getUserWithEmail(email);
  return existingUser;
};

module.exports = checkEmail ;
