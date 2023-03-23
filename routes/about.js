const express = require('express');
const router = express.Router();

// About Route
router.get('/', (req, res) => {
  const title = 'about';
  res.render('about', {
    title,
  });
})

module.exports = router;
