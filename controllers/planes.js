const Plane = require('../models/plane');

const getPlanes = async (req, res) => {
  try {
    const planes = await Plane.find();
    res.status(200).json(planes);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Не удалось получить список самолетов, повторите попытку"
      });
  }
}

const createPlanes = async (req, res) => {
  const errors = {};

  if (!req.body.name) {
    errors.name = { message: "Укажите имя" }
  }

  if (!req.body.price) {
    errors.price = { message: "Укажите цену" }
  }

  if (!req.body.description) {
    errors.description = { message: "Укажите описание" }
  }

  if (req.body.description && req.body.description.length > 700) {
    errors.description = { message: "Описание очень длинное" }
  }

  if (!req.body.capacity) {
    errors.capacity = { message: "Укажите вместимость" }
  }

  if (req.body.capacity && req.body.capacity.length > 2) {
    errors.capacity = { message: "Вместимость не может быть больше 99" }
  }

  if (!req.file) {
    errors.planeImage = { message: "Добавьте фото" }
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const { name, price, description, capacity } = req.body;
    const plane = await Plane.create({
      name, 
      price, 
      description, 
      capacity,
      planeImage: `http://localHost:${process.env.PORT}/static/${req.file.filename}`
    });
    res.status(201).json(plane);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Не удалось создать самолет, повторите попытку"
      });
  }
}

module.exports = {
  getPlanes,
  createPlanes
}