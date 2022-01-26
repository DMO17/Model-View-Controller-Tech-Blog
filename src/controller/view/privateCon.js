const { Blog, User, Comment } = require("../../models");

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
      include: [{ model: User, as: "user" }, { model: Comment }],
    });

    if (!blogData) {
      return res.render("no-blog");
    }

    const handlebarsBlogData = {
      serializedData: blogData.get({ plain: true }),
      isCommentMine: "fhrt",
    };

    const data = { loggedIn, ...handlebarsBlogData };
    console.log(handlebarsBlogData);

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

// const serializedData = {
//   posts: blogData.map((posts) => posts.get({ plain: true })),
// };

// const blogPostData = serializedData.posts.map((blog) => {
//   return {
//     ...serializedData,
//     myBlogEdit: req.session.user.id === blog.User.id,
//   };
// });
