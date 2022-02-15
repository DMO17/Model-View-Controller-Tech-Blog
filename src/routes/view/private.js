const { Router } = require("express");
const {
  renderDashboard,
  renderBlogForm,
  renderBlog,
  renderEditBlogForm,
} = require("../../controller/view/privateCon");

const router = Router();

router.get("/blog/create", renderBlogForm);

router.get("/blog/view/:blogId", renderBlog);

router.get("/blog/edit/:blogId", renderEditBlogForm);

router.get("/dashboard", renderDashboard);

module.exports = router;
