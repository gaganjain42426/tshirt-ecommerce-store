import express from 'express';
const router = express.Router();

// @route   GET /api/reviews/:productId
// @desc    Get reviews for a product
// @access  Public
router.get('/:productId', (req, res) => {
  res.json({ message: `Get reviews for product ${req.params.productId} - Coming soon!` });
});

module.exports = router;