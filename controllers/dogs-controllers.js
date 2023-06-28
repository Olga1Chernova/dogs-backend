const Dog = require('../models/dog');

exports.getDogs = async (req, res, next) => {
  try {
    const { attribute, order, pageNumber = 1, limit = 10 } = req.query;
    const offset = (pageNumber - 1) * limit;
    const orderCriteria = attribute ? [[attribute, order || 'ASC']] : [];

    const dogs = await Dog.findAll({
      order: orderCriteria,
      offset,
      limit,
    });

    res.json(dogs);
  } catch (error) {
    console.error('Error querying dogs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createDog = async (req, res, next) => {
  try {
    const { name, color, tail_length, weight } = req.body;

    if (!name || !color || !tail_length || !weight) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    const existingDog = await Dog.findOne({ where: { name } });
    if (existingDog) {
      return res.status(409).json({ error: 'Dog with the same name already exists' });
    }
    const newDog = await Dog.create({ name, color, tail_length, weight });
    res.status(201).json(newDog);
  } catch (error) {
    console.error('Error creating dog:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};