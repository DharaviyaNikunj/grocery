// backend/routes/productRoute.js
/*
import express from 'express';
import multer from 'multer';
import {
    getProducts,
    createProduct,
    deleteProduct,
} from '../controllers/productController.js';

const itemrouter = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, 'uploads/'),
    filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// GET all products
itemrouter.get('/', getProducts);

// POST create a new product (with optional image upload)
itemrouter.post('/', upload.single('image'), createProduct);

// DELETE a product by ID
itemrouter.delete('/:id', deleteProduct);

export default itemrouter;*/
import express from "express";
import multer from "multer";
import path from "path";
import Product from "../models/productModel.js";

const router = express.Router();

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ================= GET ALL PRODUCTS =================
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// ================= GET PRODUCT BY ID =================
router.get("/:id", async (req, res) => {
  console.log("Fetching product with ID:", req.params.id); // 🛠 Debug log
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      console.log("❌ Product not found");
      return res.status(404).json({ message: "Product not found" });
    }
    console.log("✅ Product found:", product);
    res.json(product);
  } catch (error) {
    console.error("❌ Error fetching product:", error);
    res.status(500).json({ message: "Server error", error });
  }
});


// ================= ADD PRODUCT =================
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, description, category, oldPrice, price } = req.body;
    const product = new Product({
      name,
      description,
      category,
      oldPrice,
      price,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// ================= UPDATE PRODUCT =================
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { name, description, category, oldPrice, price } = req.body;
    const updateData = { name, description, category, oldPrice, price };

    if (req.file) {
      updateData.imageUrl = `/uploads/${req.file.filename}`;
    }

    const product = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// ================= DELETE PRODUCT =================
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;

