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