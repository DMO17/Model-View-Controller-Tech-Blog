const { Blog, User, Comment } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
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
      name: req.session.user.full_name,
    };

    res.render("dashboard", data);
  } catch (error) {
    console.log(
      `[ERROR] : Not able to render the dashboard data | ${error.message}`
    );
  }
};

const renderBlogForm = (req, res) => {
  try {
    const { loggedIn } = req.session;
    res.render("blog-form", { loggedIn });
  } catch (error) {
    console.log(`[ERROR] : Not able to render blog form | ${error.message}`);
  }
};

const renderEditBlogForm = async (req, res) => {
  try {
    const { loggedIn } = req.session;

    const { blogId } = req.params;

    const blogData = await Blog.findOne({
      where: { blog_uuid: blogId },
      include: [{ model: User }],
    });

    if (!blogData) {
      return res.render("no-blog");
    }

    const serializedData = blogData.get({ plain: true });

    const handlebarsBlogEditData = {
      serializedData,
      myBlogEdit: req.session.user.id === serializedData.user.id,
    };

    const data = { loggedIn, ...handlebarsBlogEditData };

    return res.render("edit-blog", data);
  } catch (error) {
    console.log(
      `[ERROR] : Not able to render the Edit blog form  | ${error.message}`
    );
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

    return res.render("blog", data);
  } catch (error) {
    console.log(
      `[ERROR] : Not able to render the the blog page | ${error.message}`
    );
  }
};

module.exports = {
  renderDashboard,
  renderBlogForm,
  renderEditBlogForm,
  renderBlog,
};
