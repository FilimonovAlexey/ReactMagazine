const express = require('express');
const router = express.Router();
const { getPlanes, createPlanes, getPlane } = require('../controllers/planes');
const multer = require('multer');
const path = require('path');

//Показываем, где хранить загружаемые картинки
const storage = multer.diskStorage({
  destination: './assets/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage });

//Получить все самолеты
router.get('/', getPlanes)
//Получить самолет по id
router.get('/:id', getPlane)
//Создать самолет
router.post('/', upload.single('planeImage'), createPlanes)

module.exports = router;