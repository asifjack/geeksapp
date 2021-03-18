const express = require('express');
const router = express.Router();

const transaction = require('../controllers/transactionController');
router.post('/transaction', transaction.addTransaction);
// router.get('/project', project.getProject);/


module.exports = router;    