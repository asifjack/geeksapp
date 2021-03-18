const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers');

router.post('/', userController.Adduser);
router.get('/', userController.getUser);
router.get('/referral', userController.getReferralCode);



module.exports = router;    