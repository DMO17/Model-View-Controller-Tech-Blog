const renderDashboard = (req, res) => {
  const { loggedIn } = req.session;
  res.render("dashboard", { loggedIn });
};

const renderBlogForm = (req, res) => {
  const { loggedIn } = req.session;
  res.render("blog-form", { loggedIn });
};

module.exports = { renderDashboard, renderBlogForm };
