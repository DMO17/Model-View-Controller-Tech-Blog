const { Router } = require("express");

const router = Router();

router.use("/dashboard", renderDashboard);

module.exports = router;
