import express from "express";
import multer from "multer";
import path from "path";
import Item from "../models/itemModel.js"; // Your Mongoose model

const router = express.Router();

// ====== Multer Setup for Image Uploads ======
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`
    );
  },
});
const upload = multer({ storage });

// ====== @desc Get all items ======
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ====== @desc Get single item by ID ======
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ====== @desc Add new item ======
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, description, category, oldPrice, price } = req.body;

    const newItem = new Item({
      name,
      description,
      category,
      oldPrice,
      price,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ====== @desc Update item ======
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { name, description, category, oldPrice, price } = req.body;

    const updateData = {
      name,
      description,
      category,
      oldPrice,
      price,
    };

    if (req.file) {
      updateData.imageUrl = `/uploads/${req.file.filename}`;
    }

    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ====== @desc Delete item ======
router.delete("/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
