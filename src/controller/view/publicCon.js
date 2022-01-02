const { checkBlogExists } = require("../../helper/util");
const { Blog, User } = require("../../models");

const renderLoginPage = (req, res) => {
  res.render("login");
};

const renderSignUpPage = (req, res) => {
  res.render("signup");
};

const renderHomePage = async (req, res) => {
  const data = await Blog.findAll({
    include: [{ model: User }],
    raw: true,
  });

  console.log(data);

  // const data = blogData.map((each) => each.get({ plain: true }));

  res.render("home", { data });
};

const renderBlog = async (req, res) => {
  const { blogId } = req.params;

  const blogData = await Blog.findByPk(blogId, {
    include: [{ model: User, as: "user" }],
    raw: true,
  });

  console.log(blogData);

  // const data = blogData.get({ plain: true });

  if (!blogData) {
    return res.render("no-blog");
  }

  res.render("blog", blogData);
  // res.render("blog");
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
  renderBlog,
};
