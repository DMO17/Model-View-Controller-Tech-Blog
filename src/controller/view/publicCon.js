const { checkBlogExists } = require("../../helper/util");
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

    console.log(data);

    // const data = blogData.map((each) => each.get({ plain: true }));

    res.render("home", { data, loggedIn });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
};
