const { Router } = require("express");
const {
  renderSignUpPage,
  renderHomePage,
  renderLoginPage,
  renderBlog,
} = require("../../controller/view/publicCon");

const router = Router();

router.use("/login", renderLoginPage);

router.use("/sign-up", renderSignUpPage);

router.use("/home", renderHomePage);

router.use("/blog/view/:blogId", renderBlog);

module.exports = router;
