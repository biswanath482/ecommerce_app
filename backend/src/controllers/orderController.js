const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  const order = await Order.create({
    ...req.body,
    userId: req.user.id,
  });
  res.json(order);
};

exports.getOrders = async (req, res) => {
  res.json(await Order.find({ userId: req.user.id }));
};
