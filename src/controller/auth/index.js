const {
  getPayloadWithValidFieldsOnly,
  checkBlogExists,
  checkValidFields,
} = require("../../helper/util");
const { User, Blog, Comment } = require("../../models");

const login = async (req, res) => {
  const errorMessage = "Failed to login";
  try {
    const validFields = getPayloadWithValidFieldsOnly(
      ["username", "password"],
      req.body
    );

    if ((Object.keys(validFields).length = !2)) {
      console.log(`[ERROR]: ${errorMessage} | invalid fields`);
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    const logInUser = await User.findOne({
      where: { username: validFields.username },
    });

    if (!logInUser) {
      console.log(`[ERROR]: ${errorMessage} | user does not exist`);
      return res.status(401).json({
        success: false,
        message: errorMessage,
      });
    }

    const validPassword = await logInUser.validatePassword(
      validFields.password
    );

    if (!validPassword) {
      console.log(`[ERROR]: ${errorMessage} | invalid password`);
      return res.status(401).json({
        success: false,
        message: errorMessage,
      });
    }

    // create a session
    req.session.save(() => {
      const userInfo = {
        id: logInUser.get("id"),
        username: logInUser.get("username"),
        email: logInUser.get("email"),
        full_name: `${logInUser.get("first_name")} ${logInUser.get(
          "last_name"
        )}`,
      };

      (req.session.loggedIn = true), (req.session.user = userInfo);

      return res.json({
        success: true,
        message: `login successful`,
        data: req.session.user,
      });
    });
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};

const signUp = async (req, res) => {
  const errorMessage = "Failed to signup";
  try {
    const validFields = getPayloadWithValidFieldsOnly(
      ["first_name", "last_name", "username", "email", "password"],
      req.body
    );

    if (Object.keys(validFields).length != 5) {
      console.log(`[ERROR]: ${errorMessage} | invalid fields`);
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    const user = await User.create(validFields);

    return res.json({ success: true, data: user });
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};

const logOut = (req, res) => {
  const errorMessage = "Failed to logout user";
  try {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        return res.json({ success: true, data: "Successfully logged out" });
      });
    } else {
      return res.status(500).json({
        success: false,
        error: errorMessage,
      });
    }
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      error: errorMessage,
    });
  }
};

module.exports = {
  login,
  signUp,
  logOut,
};
