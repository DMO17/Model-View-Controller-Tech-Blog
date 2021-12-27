const { Router } = require("express");

const publicRoute = require("./publicRoute");
const privateRoute = require("./private");
const router = Router();

router.use(publicRoute);

router.use(privateRoute);

module.exports = router;
