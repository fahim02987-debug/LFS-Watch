const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

const Product = mongoose.model('Product', {
  name: String,
  price: Number,
  image: String
});

const Order = mongoose.model('Order', {
  name: String,
  phone: String,
  address: String,
  products: Array,
  total: Number,
  status: { type: String, default: 'Pending' }
});

app.get('/api/products', async (req,res)=>{
  res.json(await Product.find());
});

app.post('/api/products', async (req,res)=>{
  const p = new Product(req.body);
  await p.save();
  res.json(p);
});

app.post('/api/order', async (req,res)=>{
  const o = new Order(req.body);
  await o.save();
  res.json(o);
});

app.get('/api/orders', async (req,res)=>{
  res.json(await Order.find());
});

app.listen(5000, ()=> console.log('Backend running on 5000'));
