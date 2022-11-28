const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
//getPost
router.get("/:id", ensureAuth, postsController.getOrder);

router.post("/createOrder", postsController.createOrder);

router.put("/completeOrders/:id", postsController.completeOrders);

router.delete("/deleteOrder/:id", postsController.deleteOrder);

module.exports = router;
