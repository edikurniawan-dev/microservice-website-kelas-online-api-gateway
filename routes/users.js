const express = require('express');
const router = express.Router();
const mediaHendler = require('./hendler/users');

router.post('/register', mediaHendler.register);
router.post('/login', mediaHendler.login);

module.exports = router;
