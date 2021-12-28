const { Router } = require("express");

const publicRoute = require("./publicRoute");
const privateRoute = require("./private");
const router = Router();

router.use(privateRoute);

router.use(publicRoute);

module.exports = router;
