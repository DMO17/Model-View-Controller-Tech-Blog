const { Blog, User } = require("../../models");

const renderLoginPage = (req, res) => {
  res.render("login");
};

const renderSignUpPage = (req, res) => {
  res.render("signup");
};

const renderHomePage = async (req, res) => {
  try {
    const { loggedIn } = req.session;
    const data = await Blog.findAll({
      include: [{ model: User }],
      raw: true,
    });

    res.render("home", { data, loggedIn });
  } catch (error) {
    console.log(
      `[ERROR] : Not able to render the home page | ${error.message}`
    );
  }
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
};
