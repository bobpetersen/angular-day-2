const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Food = require('../models/food.schema');

router.get('/', (req, res) => {
  Food.find({})
    .then(dataFromDatabase => {
      //success, good things happened
      console.log('data from database', dataFromDatabase);
      res.send(dataFromDatabase);
    })
    .catch(error => {
      // error, bad things happened
      console.log('error with Food.find', error);
      res.sendStatus(500);
    });
});



router.post('/', (req, res) => {
  //foods.findByIdAndRemove(req.query._id).then(response)

  //const foodToAdd = req.body;
  Food.create(req.body)
    .then(() => {
      //success, good things happened
      console.log('data from database', dataFromDatabase);
      res.sendStatus(200);
    })
    .catch(error => {
      // error, bad things happened
      console.log('error with Food.find', error);
      res.sendStatus(500);
    });
});

module.exports = router;
