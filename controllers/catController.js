const Cat = require('../models/cat');

exports.createCat = async (req, res) => {
  try {
    const cat = new Cat(req.body);
    const savedCat = await cat.save();
    res.status(201).json(savedCat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllCats = async (req, res) => {
  try {
    const cats = await Cat.find();
    res.status(200).json(cats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Implement other CRUD operations (getCatById, updateCat, deleteCat) here...