const { Comment, Blog } = require("../../models");

const { getPayloadWithValidFieldsOnly } = require("../../helper/util");

const createAComment = async (req, res) => {
  const errorMessage = "Failed to create comment";

  try {
    const { uuid } = req.params;

    const validPostBodyFields = getPayloadWithValidFieldsOnly(
      ["comment"],
      req.body
    );

    if (Object.keys(validPostBodyFields).length != 1) {
      console.log(
        `[ERROR]: ${errorMessage} | Please Provide The Correct required Post Body Fields`
      );
      return res.status(500).json({
        success: false,
        message: errorMessage,
      });
    }

    const blogInfo = await Blog.findOne({
      where: { blog_uuid: uuid },
    });

    const serializedBlogData = blogInfo.get({ plain: true });

    const payload = {
      user_id: req.session.user.id,
      blog_id: serializedBlogData.id,
      ...validPostBodyFields,
    };

    const comment = await Comment.create(payload);

    return res.json({ success: true, data: comment });
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};

const updateAComment = async (req, res) => {
  // try {
  //   // check if blog exists
  //   const { id, uuid } = req.params;
  //   const data = await Blog.findOne({
  //     where: {
  //       blog_uuid: uuid,
  //     },
  //   });
  //   const blog = checkBlogExists(data, uuid, res);
  //   // true create a comment
  //   if (blog) {
  //     const validFields = getPayloadWithValidFieldsOnly(
  //       ["comment", "user_id"],
  //       req.body
  //     );
  //     if (Object.keys(validFields).length != 2) {
  //       return res.status(404).json({
  //         success: false,
  //         error: `Please provide the correct fields`,
  //       });
  //     }
  //     const data = await Comment.update(validFields, {
  //       where: {
  //         blog_uuid: uuid,
  //       },
  //     });
  //     return res.json({ success: true, data });
  //   }
  // } catch (error) {
  //   return res.status(500).json({
  //     success: false,
  //     error: `Failed to retrieve response => ${error.message}`,
  //   });
  // }
};

const deleteAComment = async (req, res) => {
  const errorMessage = "Failed to delete comment";

  try {
    const { commentId } = req.params;
    const data = await Comment.destroy({
      where: {
        id: commentId,
      },
    });

    if (!data) {
      console.log(
        `[ERROR]: ${errorMessage} | No comment post with this ID exists`
      );
      return res.status(500).json({
        success: false,
        message: errorMessage,
      });
    }

    return res.json({ success: true, data: "Deleted comment" });
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};

module.exports = {
  createAComment,
  updateAComment,
  deleteAComment,
};
