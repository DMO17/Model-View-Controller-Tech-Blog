const { Router } = require("express");
const {
  renderSignUpPage,
  renderHomePage,
  renderLoginPage,
} = require("../../controller/view/publicCon");

const router = Router();

router.use("/home", renderHomePage);
router.use("/login", renderLoginPage);
router.use("/sign-up", renderSignUpPage);

module.exports = router;
