const { Router } = require("express");
const {
  renderDashboard,
  renderBlog,
  renderBlogForm,
} = require("../../controller/view/privateCon");

const router = Router();

router.use("/dashboard", renderDashboard);
router.use("/blog/create", renderBlogForm);
router.use("/blog/:id", renderBlog);

module.exports = router;
