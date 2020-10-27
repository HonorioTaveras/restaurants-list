const router = require('express').Router();
const restaurantData = require('./restaurantData');

router.get('/restaurantData', (req, res) => {
  res.status(200).send(restaurantData);
});

module.exports = router;
