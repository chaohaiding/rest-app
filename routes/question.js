var express = require('express');
var router = express.Router();

/* GET question page. */
router.get('/', function(req, res) {
  req.models.question.find();
  res.render('question', { title: 'Question' });
});

/*POST question*/
router.post('/', function(req, res) {
  req.models.question.find();
  //res.render('question', { title: 'Question' });
});
module.exports = router;
