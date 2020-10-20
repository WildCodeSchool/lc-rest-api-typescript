const WilderModel = require('../models/Wilder');

module.exports = {
  create: async (req, res) => {
    await WilderModel.init();
    const wilder = new WilderModel(req.body);
    const result = await wilder.save();
    res.json({ success: true, result });
  },
  read: async (req, res) => {
    const result = await WilderModel.find();
    res.json({ success: true, result });
  },
  update: async (req, res) => {
    const result = await WilderModel.updateOne({ _id: req.body._id }, req.body);
    res.json(result);
  },
  delete: async (req, res) => {
    const result = await WilderModel.deleteOne({ _id: req.body._id });
    res.json({ success: true, result });
  },
};
