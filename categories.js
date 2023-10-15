var express = require('express');
var router = express.Router();

var pool = require('../query.js');

router.get('/', function (req, res) {
  pool.query('SELECT * FROM category', (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results.rows);
  });
});

router.get('/:category', function (req, res) {
  pool.query(
    `SELECT film.* 
    FROM film
    JOIN film_category ON film.film_id = film_category.film_id
    JOIN category ON film_category.category_id = category.category_id
    WHERE category.name = $1`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(results.rows);
    }
  );
});

//export this router to use in our index.js
module.exports = router;