const bcrypt = require("bcrypt");

const hashedPassword = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  data.password = hashedPassword;

  return data;
};

module.exports = { hashedPassword };
