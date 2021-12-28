const { Router } = require("express");
const { renderDashboard } = require("../../controller/view/privateCon");

const router = Router();

router.use("/dashboard", renderDashboard);

module.exports = router;
