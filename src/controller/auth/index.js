const {
  getPayloadWithValidFieldsOnly,
  checkBlogExists,
  checkValidFields,
} = require("../../helper/util");
const { User, Blog, Comment } = require("../../models");

const login = async (req, res) => {
  const validFields = getPayloadWithValidFieldsOnly(
    ["username", "password"],
    req.body
  );

  if ((Object.keys(validFields).length = !2)) {
    return res.status(400).json({
      success: false,
      error: "Please provide the correct fields to sign up",
    });
  }

  const logInUser = await User.findOne({
    where: { username: validFields.username },
  });

  if (!logInUser) {
    return res.status(404).json({
      success: false,
      error: `The username ${validFields.username} doesnt exist`,
    });
  }

  const validPassword = await logInUser.validatePassword(validFields.password);

  if (!validPassword) {
    return res.status(404).json({
      success: false,
      error: "Not authorised to access this account!!!!",
    });
  }

  // create a session
  req.session.save(() => {
    const userInfo = {
      id: logInUser.get("id"),
      username: logInUser.get("username"),
      email: logInUser.get("email"),
      full_name: `${logInUser.get("first_name")} ${logInUser.get("last_name")}`,
    };

    (req.session.loggedIn = true), (req.session.user = userInfo);

    return res.json({
      success: true,
      message: `login successful`,
      data: req.session.user,
    });
  });
};

const signUp = async (req, res) => {
  try {
    const validFields = getPayloadWithValidFieldsOnly(
      ["first_name", "last_name", "username", "email", "password"],
      req.body
    );

    if (Object.keys(validFields).length != 5) {
      return res.status(400).json({
        success: false,
        error: "Please provide the correct fields to sign up",
      });
    }

    const user = await User.create(validFields);

    return res.json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Failed to create user => ${error.message}`,
    });
  }
};

const logOut = (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => ({
      success: true,
      data: "Successfully logged out",
    }));
  }

  return res.status(404).json({
    success: false,
    error: "Cannot logout when you are not logged in",
  });
};

module.exports = {
  login,
  signUp,
  logOut,
};
