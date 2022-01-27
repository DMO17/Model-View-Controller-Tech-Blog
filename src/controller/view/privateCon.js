const { Blog, User, Comment } = require("../../models");

const renderDashboard = async (req, res) => {
  const { loggedIn } = req.session;

  const blogs = await Blog.findAll({
    where: { user_id: req.session.user.id },
    include: [{ model: User, as: "user" }],
  });

  const comments = await Comment.findAll({
    where: { user_id: req.session.user.id },
  });

  const data = {
    loggedIn,
    blogs: blogs.map((blog) => blog.get({ plain: true })),
    comments: comments.map((comment) => comment.get({ plain: true })),
  };

  console.log(data.comments);

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

    const blogData = await Blog.findOne({
      where: { blog_uuid: blogId },
      include: [{ model: User }],
      // raw: true,
    });

    const serializedData = blogData.get({ plain: true });

    const handlebarsBlogEditData = {
      serializedData,
      myBlogEdit: req.session.user.id === serializedData.user.id,
    };

    const data = { loggedIn, ...handlebarsBlogEditData };

    console.log(data);

    return res.render("edit-blog", data);
  } catch (error) {
    console.log(error.message);
  }
};

const renderBlog = async (req, res) => {
  try {
    const { loggedIn } = req.session;

    const username = req.session.user.username;

    const { blogId } = req.params;

    const blogData = await Blog.findOne({
      where: { blog_uuid: blogId },
      include: [
        { model: User, as: "user" },
        { model: Comment, include: User },
      ],
    });

    if (!blogData) {
      return res.render("no-blog");
    }

    // const serializedData = { blogInfo: blogData.get({ plain: true }) };

    // const data = { loggedIn, ...handlebarsBlogData };
    // console.log(handlebarsBlogData.serializedData.comments);

    const blogComments = blogData
      .get({ plain: true })
      .comments.map((comment) => {
        return {
          myBlogComment: req.session.user.id === comment.user.id,
        };
      });

    const data = {
      loggedIn,
      serializedData: blogData.get({ plain: true }),
      blogComments,
    };

    console.log(data);

    return res.render("blog", data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  renderDashboard,
  renderBlogForm,
  renderEditBlogForm,
  renderBlog,
};
