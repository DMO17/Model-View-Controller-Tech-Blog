const { Router } = require("express");

const api = require("./api");
const auth = require("./auth");
const view = require("./view");

const router = Router();

router.use("/auth", auth);
router.use("/api", api);
router.use("/", view);

module.exports = router;
