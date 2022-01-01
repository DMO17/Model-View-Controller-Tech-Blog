const { Router } = require("express");
const {
  renderDashboard,
  renderBlogForm,
} = require("../../controller/view/privateCon");

const router = Router();

router.use("/blog/create", renderBlogForm);

router.use("/dashboard", renderDashboard);

module.exports = router;
