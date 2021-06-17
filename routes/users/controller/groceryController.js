const Grocery = require("../model/Grocery");

async function getAllGroceryFunc(req, res) {
  try {
    let foundAllGrocery = await Grocery.find({});

    res.json({ message: "SUCCESS", data: foundAllGrocery });
  } catch (e) {
    res.status(500).json({ message: "FAILURE", error: e.message });
  }
}

async function createGroceryListFunc(req, res) {
  try {
    let createdGroceryList = new Grocery({
      grocery: req.body.grocery,
    });
    let savedList = await createdGroceryList.save();
    res.json({ payload: savedList });
  } catch (e) {
    res.status(500).json({ message: "FAILURE", error: e.message });
  }
}

async function updateGroceryListFunc(req, res) {
  const id = req.params.id;
  try {
    let updatedGroceryList = await Grocery.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.json({ message: "SUCCESS", data: updatedGroceryList });
  } catch (e) {
    res.status(500).json({ message: "FAILURE", error: e.message });
  }
}

async function deleteGroceryByIdFunc(req, res) {
  const id = req.params.id;
  try {
    let deleteItem = await Grocery.findByIdAndRemove({ _id: id });
    res.json({ message: "SUCCESS", data: deleteItem });
  } catch (e) {
    res.status(500).json({ message: "FAILURE", error: e.message });
  }
}

module.exports = {
  getAllGroceryFunc,
  createGroceryListFunc,
  updateGroceryListFunc,
  deleteGroceryByIdFunc,
};
