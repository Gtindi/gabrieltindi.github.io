const express = require('express');
const router = express.Router();


// Contact Route
router.get('/', (req, res) => {
  const title = 'contact';
  res.render('contact', {
    title,
  });
});

module.exports = router;
