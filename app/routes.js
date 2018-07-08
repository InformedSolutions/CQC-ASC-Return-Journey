const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

router.get('/application/task_list', function (req, res) {
  // Complete tag
  req.session.peopleService = req.session.staffNumbers || req.query['peopleService'] || false;
  req.session.staffNumbers = req.session.staffNumbers || req.query['staffNumbers'] || false;
  req.session.howService = req.session.howService || req.query['howService'] || false;
  req.session.reviewService = req.session.reviewService || req.query['reviewService'] || false;

  res.render('application/task_list', {
    peopleService: req.session.peopleService,
    staffNumbers: req.session.staffNumbers,
    howService: req.session.howService,
    reviewService: req.session.reviewService
    });
});

module.exports = router
