const { getPayloadWithValidFieldsOnly } = require("../../helper/util");
const { User, Blog } = require("../../modules");

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

const getAllBlogs = (req, res) => {
  res.send("api controller gab");
};

const getBlogById = (req, res) => {
  res.send("api controller gabbid");
};

const createBlog = async (req, res) => {
  try {
    const validFields = getPayloadWithValidFieldsOnly(
      ["title", "content", "user_id"],
      req.body
    );

    console.log(validFields, req.body);

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

const deleteBlog = (req, res) => {
  res.send("api controller db");
};

const getAllComments = (req, res) => {
  res.send("api controller get comment");
};

const createAComment = (req, res) => {
  res.send("api controller create comment");
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
