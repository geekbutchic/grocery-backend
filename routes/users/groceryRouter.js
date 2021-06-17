const express = require("express");
const router = express.Router();

const {
  getAllGroceryFunc,
  createGroceryListFunc,
  updateGroceryListFunc,
  deleteGroceryByIdFunc,
} = require("./controller/groceryController");

router.get("/api/test", function (req, res, next) {
  res.json({
    test: true,
  });
});

router.get("/get-all-grocery", getAllGroceryFunc);

router.post("/create-grocery-list", createGroceryListFunc);

router.put("/update-grocery-by-id/:id", updateGroceryListFunc);

router.delete("/delete-grocery-item-by-id/:id", deleteGroceryByIdFunc);

module.exports = router;
