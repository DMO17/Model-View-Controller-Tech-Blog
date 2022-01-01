const { Blog } = require("../../models");

const renderHomePage = async (req, res) => {
  const blogData = await Blog.findAll();

  const data = blogData.map((each) => each.get({ plain: true }));

  res.render("home", { data });

  console.log("data over here", data);

  // return res.render("home");
};

const renderLoginPage = (req, res) => {
  res.render("login");
};
const renderSignUpPage = (req, res) => {
  res.render("signup");
};

const renderBlog = (req, res) => {
  res.render("blog");
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
  renderBlog,
};
