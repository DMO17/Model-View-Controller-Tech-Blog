const { checkBlogExists } = require("../../helper/util");
const { Blog } = require("../../models");

const renderLoginPage = (req, res) => {
  res.render("login");
};
const renderSignUpPage = (req, res) => {
  res.render("signup");
};

const renderHomePage = async (req, res) => {
  const blogData = await Blog.findAll();

  const data = blogData.map((each) => each.get({ plain: true }));

  res.render("home", { data });
};

const renderBlog = async (req, res) => {
  const { blogId } = req.params;

  const blogData = await Blog.findOne({
    where: {
      blog_uuid: blogId,
    },
  });

  const data = blogData.get({ plain: true });

  if (!data) {
    return res.render("no-blog");
  }

  res.render("blog", data.data);
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
  renderBlog,
};
