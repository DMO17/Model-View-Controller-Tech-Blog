const { Router } = require("express");

const api = require("./api");
const auth = require("./auth");
const view = require("./view");

const router = Router();

router.use("/", view);

router.use("/api", api);

router.use("/auth", auth);

module.exports = router;
