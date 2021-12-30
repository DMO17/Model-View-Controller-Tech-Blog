const { Router } = require("express");

const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../../controller/api/blog");

const {
  getAllComments,
  createAComment,
  updateAComment,
  deleteAComment,
} = require("../../controller/api/comment");

const router = Router();

router.get("/blog", getAllBlogs);
router.get("/blog?blogId", getBlogById);
router.post("/blog", createBlog);
router.put("/blog?blogId", updateBlog);
router.delete("/blog?blogId", deleteBlog);

router.get("/blog/:id/comment", getAllComments);
router.post("/blog/:id/comment", createAComment);
router.put("/blog/:id/comment/:id", updateAComment);
router.delete("/blog/:id/comment/:id", deleteAComment);

module.exports = router;
