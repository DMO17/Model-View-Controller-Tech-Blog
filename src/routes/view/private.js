const { Router } = require("express");
const {
  renderDashboard,
  renderBlogForm,
} = require("../../controller/view/privateCon");

const router = Router();

router.use("/dashboard", renderDashboard);
router.use("/blog/create", renderBlogForm);

module.exports = router;
