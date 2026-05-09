const router = require("express").Router();
const { getProducts, addProduct } = require("../controllers/productController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.get("/", getProducts);
router.post("/", auth, role("Admin"), addProduct);

module.exports = router;
