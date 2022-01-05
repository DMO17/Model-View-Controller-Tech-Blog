const { Blog, User } = require("../../models");

const {
  getPayloadWithValidFieldsOnly,
  checkBlogExists,
  checkValidFields,
} = require("../../helper/util");

// const getAllBlogs = async (req, res) => {
//   try {
//     const data = await Blog.findAll();

//     return res.json({ success: true, data });
//   } catch (error) {
//     return res.status(500).json({
//       success: true,
//       error: `Failed to retrieve response => ${error.message}`,
//     });
//   }
// };

// const getBlogById = async (req, res) => {
//   try {
//     const { uuid } = req.params;
//     const data = await Blog.findOne({
//       where: {
//         blog_uuid: uuid,
//       },
//     });
//     checkBlogExists(data, uuid, res);
//   } catch (error) {
//     return res.status(500).json({
//       success: true,
//       error: `Failed to retrieve response => ${error.message}`,
//     });
//   }
// };

const createBlog = async (req, res) => {
  try {
    const validFields = getPayloadWithValidFieldsOnly(
      ["title", "content", "blog_img"],
      req.body
    );

    if (Object.keys(validFields).length != 3) {
      return res.status(400).json({
        success: false,
        error: `please provide the correct body fields `,
      });
    }

    const allValidFields = {
      user_id: req.session.user.id,
      ...validFields,
    };

    const blog = await Blog.create(allValidFields);

    return res.json({ success: true, data: blog });
  } catch (error) {
    return res.json({
      success: false,
      error: `Failed to create a blog => ${error.message}`,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { uuid } = req.params;

    console.log(uuid);

    const validFields = getPayloadWithValidFieldsOnly(
      ["title", "content", "blog_img"],
      req.body
    );

    if (Object.keys(validFields).length != 3) {
      return res.status(400).json({
        success: false,
        error: `please provide the correct body fields `,
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
      return res
        .status(404)
        .json({ success: false, message: "No Blog with this id exists" });
    }

    return res.json({ success: true, data });
  } catch (error) {
    return res.json({
      success: false,
      error: `Failed to create a blog => ${error.message}`,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { uuid } = req.params;

    const data = await Blog.destroy({
      where: {
        blog_uuid: uuid,
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

module.exports = {
  // getAllBlogs,
  // getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
