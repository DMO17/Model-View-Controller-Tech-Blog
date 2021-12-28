const { Router } = require("express");
const {
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
} = require("../../controller/auth");

const router = Router();

router.post("/login", login);
router.post("/signup", signUp);
router.post("/logout", logOut);

router.get("/blog", getAllBlogs);
router.get("/blog/:id", getBlogById);
router.post("/blog", createBlog);
router.put("/blog/:id", updateBlog);
router.delete("/blog/:id", deleteBlog);

router.get("/blog/:id/comment", getAllComments);
router.post("/blog/:id/comment", createAComment);
router.put("/blog/:id/comment/:id", updateAComment);
router.delete("/blog/:id/comment/:id", deleteAComment);

module.exports = router;
