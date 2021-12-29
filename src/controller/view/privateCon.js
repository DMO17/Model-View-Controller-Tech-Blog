const renderDashboard = (req, res) => {
  res.render("dashboard");
};

const renderBlogForm = (req, res) => {
  res.render("blog-form");
};

module.exports = { renderDashboard, renderBlogForm };
