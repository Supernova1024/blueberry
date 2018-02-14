const router = require("express").Router();
const companyRoutes = require("./companies");
const vendorRoutes = require("./vendors");
const qboRoutes = require("./qbo");

// company routes
router.use("/companies", companyRoutes);

// vendor routes
router.use("/vendors", vendorRoutes);

router.use("/qbo", qboRoutes);


module.exports = router;