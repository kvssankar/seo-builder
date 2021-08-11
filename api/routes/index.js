const express = require("express");
const { upload } = require("../controllers/s3uploadClient");

const router = express.Router();
const homeController = require("../controllers/home_controller.js");
console.log("router loaded");

router.get("/", homeController.home);
router.get("/login", homeController.login);
router.get("/upload",homeController.upload)

router.post("/uploadfile", upload.single("information"), homeController.uploadfile);

router.use('/users', require('./user'));
module.exports = router;
