const {
  getPayloadWithValidFieldsOnly,
  checkBlogExists,
} = require("../../helper/util");
const { User, Blog, Comment } = require("../../modules");

const login = (req, res) => {
  res.send("api controller li");
};

const signUp = async (req, res) => {
  try {
    const validFields = getPayloadWithValidFieldsOnly(
      ["first_name", "last_name", "username", "email", "password"],
      req.body
    );

    console.log(req.body, validFields);

    if (Object.keys(validFields).length != 5) {
      return res.status(400).json({
        success: false,
        error: "Please provide the correct fields to sign up",
      });
    }

    const user = await User.create(validFields);

    return res.json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Failed to create user => ${error.message}`,
    });
  }
};

const logOut = (req, res) => {
  res.send("api controller lo");
};

const getAllBlogs = async (req, res) => {
  try {
    const data = await Blog.findAll();

    return res.json({ success: true, data });
  } catch (error) {
    return res.status(500).json({
      success: true,
      error: `Failed to retrieve response => ${error.message}`,
    });
  }
};

const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Blog.findByPk(id);
    checkBlogExists(data, id, res);
  } catch (error) {
    return res.status(500).json({
      success: true,
      error: `Failed to retrieve response => ${error.message}`,
    });
  }
};

const createBlog = async (req, res) => {
  try {
    const validFields = getPayloadWithValidFieldsOnly(
      ["title", "content", "user_id"],
      req.body
    );

    if (Object.keys(validFields).length != 3) {
      return res.status(400).json({
        success: false,
        error: `please provide the correct body fields `,
      });
    }

    const blog = await Blog.create(validFields);

    return res.json({ success: true, data: blog });
  } catch (error) {
    return res.json({
      success: false,
      error: `Failed to create a blog => ${error.message}`,
    });
  }
};

const updateBlog = (req, res) => {
  res.send("api controller ub");
};

const deleteBlog = async (req, res) => {
  try {
    const data = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!data) {
      return res.status(404).json({ message: "No Blog with this id exists" });
    }

    return res.json({ success: true, data: "Deleted Blog" });
  } catch (error) {
    return res.status(500).json({
      success: true,
      error: `Failed to retrieve response => ${error.message}`,
    });
  }
};

const getAllComments = async (req, res) => {
  try {
    const data = await Comment.findAll();

    return res.json({ success: true, data });
  } catch (error) {
    return res.status(500).json({
      success: true,
      error: `Failed to retrieve response => ${error.message}`,
    });
  }
};

const getCommentById = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Comment.findByPk(id);

    data
      ? res.json({ success: true, data })
      : res.json({
          success: false,
          error: `Comment with id of ${id} doest exist`,
        });
  } catch (error) {
    return res.status(500).json({
      success: true,
      error: `Failed to retrieve response => ${error.message}`,
    });
  }
};

const createAComment = async (req, res) => {
  try {
    // check if blog exists
    const { id } = req.params;
    const data = await Blog.findByPk(id);
    const blog = checkBlogExists(data, id, res);

    // true create a comment
    if (blog) {
      const validFields = getPayloadWithValidFieldsOnly(
        ["comment", "blog_id", "user_id"],
        req.body
      );

      // console.log(id);

      if (Object.keys(validFields).length != 3) {
        return res.status(404).json({
          success: false,
          error: `Please provide the correct fields`,
        });
      }

      const data = await Comment.create(validFields);

      return res.json({ success: true, data });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Failed to retrieve response => ${error.message}`,
    });
  }
};

const updateAComment = (req, res) => {
  res.send("api controller update comment");
};

const deleteAComment = (req, res) => {
  res.send("api controller delete comment");
};

module.exports = {
  login,
  signUp,
  logOut,
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getAllComments,
  createAComment,
  updateAComment,
  deleteAComment,
};
