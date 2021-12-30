const { Router } = require("express");
const {
  renderSignUpPage,
  renderHomePage,
  renderLoginPage,
  renderBlog,
} = require("../../controller/view/publicCon");

const router = Router();

router.use("/sign-up", renderSignUpPage);

router.use("/blog?blogId=", renderBlog);

router.use("/home", renderHomePage);

router.use("/login", renderLoginPage);

module.exports = router;
