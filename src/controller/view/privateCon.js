const renderDashboard = (req, res) => {
  res.render("dashboard");
};

const renderBlog = (req, res) => {
  res.render("blog");
};

const renderBlogForm = (req, res) => {
  res.render("blog-form");
};

module.exports = { renderDashboard, renderBlog, renderBlogForm };
