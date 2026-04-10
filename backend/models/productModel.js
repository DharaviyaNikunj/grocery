/*import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, default: '' },
        category: { type: String, required: true },
        oldPrice: { type: Number, required: true, min: 0 },
        price: { type: Number, required: true, min: 0 },
        imageUrl: { type: String },
    },
    {
        timestamps: true,
    }
);

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
// backend/models/productModel.js*/
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
   
    price: { type: Number, required: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product; // ✅ Default export
