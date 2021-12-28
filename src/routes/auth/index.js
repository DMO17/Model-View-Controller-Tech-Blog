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

module.exports = router;
