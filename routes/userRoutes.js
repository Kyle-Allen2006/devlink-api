const express = require('express');
const router = express.Router();
const {
  createUser,
  getUserProfile
} = require('../controllers/userController');

router.post('/', createUser);
router.get('/:username', getUserProfile);

module.exports = router;
