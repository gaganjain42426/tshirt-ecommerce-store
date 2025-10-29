import express from 'express';
const router = express.Router();

// @route   POST /api/upload/image
// @desc    Upload image
// @access  Private
router.post('/image', (req, res) => {
  res.json({ message: 'Upload image - Coming soon!' });
});

module.exports = router;