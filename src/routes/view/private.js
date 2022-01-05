const { Router } = require("express");
const {
  renderDashboard,
  renderBlogForm,
  renderEditBlogForm,
} = require("../../controller/view/privateCon");

const router = Router();

router.use("/blog/create", renderBlogForm);

router.use("/blog/edit/:blogId", renderEditBlogForm);

router.use("/dashboard", renderDashboard);

module.exports = router;
