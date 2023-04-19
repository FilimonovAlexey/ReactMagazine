const express = require('express');
const router = express.Router();
// const path = require('patch');

router.get('/', (req, res) => res.send('get all planes'))
router.get('/:id', (req, res) => res.send('get single planes'))
router.post('/', (req, res) => res.send('create planes'))

module.exports = router;