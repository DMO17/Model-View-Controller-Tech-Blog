const renderHomePage = (req, res) => {
  res.render("home");
};
const renderLoginPage = (req, res) => {
  res.render("login");
};
const renderSignUpPage = (req, res) => {
  res.render("signup");
};

module.exports = { renderHomePage, renderLoginPage, renderSignUpPage };
