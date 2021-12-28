const login = (req, res) => {
  res.send("api controller li");
};
const signUp = (req, res) => {
  res.send("api controller su");
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
const createBlog = (req, res) => {
  res.send("api controller cb");
};
const updateBlog = (req, res) => {
  res.send("api controller ub");
};
const deleteBlog = (req, res) => {
  res.send("api controller db");
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
};
