const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

router.post('/', catController.createCat);
router.get('/', catController.getAllCats);

// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

module.exports = router;