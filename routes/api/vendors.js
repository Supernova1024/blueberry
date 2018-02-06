const router = require("express").Router();
const vendorsController = require("../../controllers/vendorsController");

// Matches with "/api/vendors"
//router.route("/")
 // .get(vendorsController.findAll)
//  .post(vendorsController.create);

// Matches with "/api/vendors/:id"
//router
 // .route("/:id")
//  .get(vendorsController.findById)
//  .delete(vendorsController.remove);

module.exports = router;