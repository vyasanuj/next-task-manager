// const items = [];
// Temporary in-memory storage

import Item from "../models/items.model.js";

export const getItems = async (req, res) => {
  try {
    const item = await Item.find();
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch items" });
  }
};

export const createItem = async (req, res) => {
  const { name } = req.body;

  try {
    const newItem = new Item({ name });
    await newItem.save();
    res.status(201).json(newItem);
    console.log("New Item:", newItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to create item" });
  }
};

export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const updatedItem = await Item.findByIdAndUpdate(
      id,
      { name },
      { new: true, runValidators: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({ message: "Item deleted successfully", deletedItem });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
