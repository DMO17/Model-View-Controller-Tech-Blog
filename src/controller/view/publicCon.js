const renderHomePage = (req, res) => {
  res.render("home");
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
