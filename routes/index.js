const express = require('express');
const router = express.Router();


// Home Route
router.get('/', (req, res) => {
  const title = 'home';
  res.render('index', {
    title,
  });
});

module.exports = router;
