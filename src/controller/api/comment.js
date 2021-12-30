const { Comment } = require("../../modules");

const {
  getPayloadWithValidFieldsOnly,
  checkBlogExists,
  checkValidFields,
} = require("../../helper/util");

/// REFACTORED AND ADJUSTED

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

const deleteAComment = async (req, res) => {
  // check if blog exists
  const { id } = req.params;
  const data = await Blog.findByPk(id);
  const blog = checkBlogExists(data, id, res);

  // true create a comment
  if (blog) {
    console.log(id);
  }

  return res.send("yess");
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

module.exports = {
  getAllComments,
  createAComment,
  updateAComment,
  deleteAComment,
  getCommentById,
};
