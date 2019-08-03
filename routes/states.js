const { State, validate } = require('../models/state');
const express = require('express');
const winston = require('winston');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
  const getstates = await State.find().select('-__v');
  res.send(getstates);
});

router.get('/:id', async (req, res) => {
  const state = await State.findById(req.params.id).select('-__v');

  if (!state) return res.status(404).send('The state with the given ID was not found. ');

  res.send(state);
});

router.post('/', auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    const isStateExist = await State.findOne({ name: req.body.name });
    if (isStateExist != null) {
      return res.status(400).send("State already exist");
    }
  
    let state = new State({ name: req.body.name });
    state = await state.save();
  
    res.send(state);
  });

module.exports = router;