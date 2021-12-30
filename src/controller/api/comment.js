const { Comment, Blog } = require("../../models");

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
    const { id, uuid } = req.params;

    const data = await Blog.findOne({
      where: {
        blog_uuid: uuid,
      },
    });

    const blog = checkBlogExists(data, uuid, res);

    // true create a comment
    if (blog) {
      const validFields = getPayloadWithValidFieldsOnly(
        ["comment", "user_id"],
        req.body
      );

      const allValidFields = {
        blog_id: uuid,
        ...validFields,
      };

      console.log(allValidFields);

      if (Object.keys(allValidFields).length != 2) {
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

const updateAComment = async (req, res) => {
  try {
    // check if blog exists
    const { id, uuid } = req.params;

    const data = await Blog.findOne({
      where: {
        blog_uuid: uuid,
      },
    });

    const blog = checkBlogExists(data, uuid, res);

    // true create a comment
    if (blog) {
      const validFields = getPayloadWithValidFieldsOnly(
        ["comment", "user_id"],
        req.body
      );

      if (Object.keys(validFields).length != 2) {
        return res.status(404).json({
          success: false,
          error: `Please provide the correct fields`,
        });
      }

      const data = await Comment.update(validFields, {
        where: {
          blog_uuid: uuid,
        },
      });

      return res.json({ success: true, data });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Failed to retrieve response => ${error.message}`,
    });
  }
};

const deleteAComment = async (req, res) => {
  try {
    // check if blog exists
    const { id, uuid } = req.params;
    const data = await Blog.findOne({ where: { blog_uuid: uuid } });
    const blog = checkBlogExists(data, uuid, res);

    // true create a comment
    if (blog) {
      const data = await Comment.destroy({
        where: {
          comment: id,
        },
      });
      if (!data) {
        return res.status(404).json({ message: "No Blog with this id exists" });
      }

      return res.json({
        success: true,
        data: `Deleted your comment from blog with id ${uuid}`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
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

module.exports = {
  getAllComments,
  createAComment,
  updateAComment,
  deleteAComment,
  getCommentById,
};
