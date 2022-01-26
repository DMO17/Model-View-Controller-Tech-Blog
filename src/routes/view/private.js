const { Router } = require("express");
const {
  renderDashboard,
  renderBlogForm,
  renderEditBlogForm,
} = require("../../controller/view/privateCon");

const router = Router();

router.get("/blog/create", renderBlogForm);

router.get("/blog/edit/:blogId", renderEditBlogForm);

router.get("/dashboard", renderDashboard);

module.exports = router;
