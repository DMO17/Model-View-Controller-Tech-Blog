const { Blog, User } = require("../../models");

const renderDashboard = async (req, res) => {
  const { loggedIn } = req.session;

  const userBlogData = await Blog.findOne({
    where: { user_id: req.session.user.id },
    include: [{ model: User, as: "user" }],
    raw: true,
  });

  console.log(userBlogData);

  const data = { loggedIn, ...userBlogData };

  console.log(data);

  res.render("dashboard", data);
};

const renderBlogForm = (req, res) => {
  const { loggedIn } = req.session;
  res.render("blog-form", { loggedIn });
};

module.exports = { renderDashboard, renderBlogForm };
