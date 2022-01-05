const { checkBlogExists } = require("../../helper/util");
const { Blog, User } = require("../../models");

const renderLoginPage = (req, res) => {
  res.render("login");
};

const renderSignUpPage = (req, res) => {
  res.render("signup");
};

const renderHomePage = async (req, res) => {
  const { loggedIn } = req.session;
  const data = await Blog.findAll({
    include: [{ model: User }],
    raw: true,
  });

  console.log(data);

  // const data = blogData.map((each) => each.get({ plain: true }));

  res.render("home", { data, loggedIn });
};

const renderBlog = async (req, res) => {
  const { loggedIn } = req.session;

  const { blogId } = req.params;

  // const blogData = await Blog.findByPk(blogId, {
  //   include: [{ model: User, as: "user" }],
  //   raw: true,
  // });

  const blogData = await Blog.findOne({
    where: { blog_uuid: blogId },
    include: [{ model: User, as: "user" }],
    raw: true,
  });

  console.log(blogData);

  // const data = blogData.get({ plain: true });

  if (!blogData) {
    return res.render("no-blog");
  }

  const data = { loggedIn, ...blogData };

  res.render("blog", data);
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
  renderBlog,
};
