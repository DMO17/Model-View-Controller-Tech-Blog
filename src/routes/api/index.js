const { Router } = require("express");

const {
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../../controller/api/blog");

const {
  createAComment,
  updateAComment,
  deleteAComment,
} = require("../../controller/api/comment");

const router = Router();

router.post("/blog", createBlog);
router.put("/blog/:uuid", updateBlog);
router.delete("/blog/:uuid", deleteBlog);

router.delete("/comment/:commentId", deleteAComment);
router.post("/blog/:uuid/comment", createAComment);
router.put("/blog/:uuid/comment/:id", updateAComment);

module.exports = router;
