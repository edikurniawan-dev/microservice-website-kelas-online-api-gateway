const express = require('express');
const router = express.Router();
const mediaHendler = require('./hendler/users');

router.post('/register', mediaHendler.register);

module.exports = router;
