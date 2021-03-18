const express = require('express');
const router = express.Router();

const project = require('../controllers/projectController');
router.post('/project', project.addProject);
router.get('/project', project.getProject);


module.exports = router;    