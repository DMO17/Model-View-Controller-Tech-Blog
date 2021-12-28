const { Router } = require("express");
const {
  renderSignUpPage,
  renderHomePage,
  renderLoginPage,
} = require("../../controller/view/publicCon");

const router = Router();

router.use("/login", renderLoginPage);
router.use("/sign-up", renderSignUpPage);
router.use("/", renderHomePage);

module.exports = router;