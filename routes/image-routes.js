const express = require("express");
const { check } = require("express-validator");
const imageController = require("../controllers/image-controller");
const fileUpload = require('../middleware/file-upload');
const auth = require('../middleware/check-auth');
const optionalAuth = require('../middleware/check-optional-auth');

const router = express.Router();

router.post("/", auth, fileUpload.single('file'), imageController.createImage);
router.get("/:imageId", optionalAuth, imageController.getImageById);
router.delete("/:imageId", auth, imageController.deleteImage);
router.patch("/:imageId", auth, fileUpload.single('file'), imageController.updateImage);


module.exports = router;

