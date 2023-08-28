const express = require("express");
const filterController = require ("../controllers/filter");
const router = express.Router();

router.get("/filter", filterController.getAllWeapons);

module.exports = router;