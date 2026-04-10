import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: String,
  price: Number,
  quantity: Number,
  imageUrl: String
});

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  customer: {
    name: String,
    email: String,
    phone: String,
    address: String
  },
  items: [orderItemSchema],
  paymentMethod: String,
  paymentStatus: { type: String, default: 'Unpaid' },
  status: { type: String, default: 'Pending' },
  subtotal: Number,
  tax: Number,
  shipping: { type: Number, default: 0 },
  total: Number,
  deliveryDate: Date
}, { timestamps: true });

orderSchema.pre('save', function () {
  this.subtotal = this.items.reduce((s, i) => s + i.price * i.quantity, 0);
  this.tax = +(this.subtotal * 0.05).toFixed(2);
  this.total = this.subtotal + this.tax + this.shipping;
});

export default mongoose.model('Order', orderSchema);
