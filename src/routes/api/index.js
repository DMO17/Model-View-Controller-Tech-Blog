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

// router.get("/blog", getAllBlogs);
// router.get("/blog/:uuid", getBlogById);
router.post("/blog", createBlog);
router.put("/blog/:uuid", updateBlog);
router.delete("/blog/:uuid", deleteBlog);

router.post("/blog/:uuid/comment", createAComment);
router.put("/blog/:uuid/comment/:id", updateAComment);
router.delete("/blog/:uuid/comment/:id", deleteAComment);

module.exports = router;
