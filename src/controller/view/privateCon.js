const { Blog, User } = require("../../models");

const renderDashboard = async (req, res) => {
  const { loggedIn } = req.session;

  const blogs = await Blog.findAll({
    where: { user_id: req.session.user.id },
    include: [{ model: User, as: "user" }],
    // raw: true,
  });

  const data = {
    loggedIn,
    blogs: blogs.map((blog) => blog.get({ plain: true })),
  };

  console.log(data);

  res.render("dashboard", data);
};

const renderBlogForm = (req, res) => {
  const { loggedIn } = req.session;
  res.render("blog-form", { loggedIn });
};

const renderEditBlogForm = async (req, res) => {
  try {
    const { loggedIn } = req.session;

    const { blogId } = req.params;

    // const blogData = await Blog.findByPk(blogId, {
    //   include: [{ model: User, as: "user" }],
    //   raw: true,
    // });

    const blogData = await Blog.findOne({
      where: { blog_uuid: blogId },
      raw: true,
    });

    console.log(blogData);

    // const data = blogData.get({ plain: true });

    if (!blogData) {
      return res.render("no-blog");
    }

    const data = { loggedIn, ...blogData };

    return res.render("edit-blog", data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { renderDashboard, renderBlogForm, renderEditBlogForm };
