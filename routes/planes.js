const express = require('express');
const router = express.Router();
const { getPlanes } = require('../controllers/planes');
// const path = require('patch');

//Получить все самолеты
router.get('/', getPlanes)
//Получить самолет по id
router.get('/:id', (req, res) => res.send('get single planes'))
//Создать самолет
router.post('/', (req, res) => res.send('create planes'))

module.exports = router;