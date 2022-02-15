const { Router } = require("express");
const { login, signUp, logOut } = require("../../controller/auth");

const router = Router();

router.post("/login", login);
router.post("/signup", signUp);
router.post("/logout", logOut);

module.exports = router;
