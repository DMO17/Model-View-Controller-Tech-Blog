const { Router } = require("express");
const {
  renderSignUpPage,
  renderHomePage,
  renderLoginPage,
} = require("../../controller/view/publicCon");

const router = Router();

router.get("/login", renderLoginPage);

router.get("/sign-up", renderSignUpPage);

router.get("/", renderHomePage);

module.exports = router;
