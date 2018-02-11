const router = require("express").Router();
const companyRoutes = require("./companies");
const vendorRoutes = require("./vendors");
// company routes
router.use("/companies", companyRoutes);

// vendor routes
router.use("/vendors", vendorRoutes);

module.exports = router;