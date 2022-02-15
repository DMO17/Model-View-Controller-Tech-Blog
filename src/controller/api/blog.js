const { Blog, User } = require("../../models");

const { getPayloadWithValidFieldsOnly } = require("../../helper/util");

const createBlog = async (req, res) => {
  const errorMessage = "Failed to create Blog post";
  try {
    const validFields = getPayloadWithValidFieldsOnly(
      ["title", "content", "blog_img"],
      req.body
    );

    if (Object.keys(validFields).length != 3) {
      console.log(`[ERROR]: ${errorMessage} | invalid fields`);
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    const allValidFields = {
      user_id: req.session.user.id,
      ...validFields,
    };

    const blog = await Blog.create(allValidFields);

    return res.json({ success: true, data: blog });
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};

const updateBlog = async (req, res) => {
  const errorMessage = "Failed to update blog post";
  try {
    const { uuid } = req.params;

    const validFields = getPayloadWithValidFieldsOnly(
      ["title", "content", "blog_img"],
      req.body
    );

    if (Object.keys(validFields).length != 3) {
      console.log(
        `[ERROR]: ${errorMessage} | Please Provide The Correct required Post Body Fields`
      );
      return res.status(500).json({
        success: false,
        message: errorMessage,
      });
    }

    const allValidFields = {
      user_id: req.session.user.id,
      ...validFields,
    };

    const data = await Blog.update(allValidFields, {
      where: { blog_uuid: uuid },
      raw: true,
    });

    if (!data[0]) {
      console.log(`[ERROR]: ${errorMessage} | No Blog with this id exists`);
      return res.status(404).json({ success: false, message: errorMessage });
    }

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};

const deleteBlog = async (req, res) => {
  const errorMessage = "Failed to delete blog post";
  try {
    const { uuid } = req.params;

    const data = await Blog.destroy({
      where: {
        blog_uuid: uuid,
      },
    });
    if (!data) {
      console.log(
        `[ERROR]: ${errorMessage} | No blog post with this ID exists`
      );
      return res.status(500).json({
        success: false,
        message: errorMessage,
      });
    }

    return res.json({ success: true, data: "Deleted Blog" });
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
};
