const { Router } = require("express");

const publicRoute = require("./publicRoute");
const privateRoute = require("./private");
const authentication = require("../../middleware/authentication");
const router = Router();

router.use(publicRoute);

// router.use(authentication, privateRoute);

router.use(privateRoute);

module.exports = router;
