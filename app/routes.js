const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

router.get('/application/task_list', function (req, res) {
  // Complete tag
  req.session.peopleService = req.session.peopleService || req.query['peopleService'] || false;
  req.session.staffNumbers = req.session.staffNumbers || req.query['staffNumbers'] || false;
  req.session.howService = req.session.howService || req.query['howService'] || false;
  req.session.reviewService = req.session.reviewService || req.query['reviewService'] || false;

  var showReview = false;

  if (req.session.peopleService && req.session.staffNumbers && req.session.howService) showReview=true;

  res.render('application/task_list', {
    peopleService: req.session.peopleService,
    staffNumbers: req.session.staffNumbers,
    howService: req.session.howService,
    reviewService: req.session.reviewService,
    showReview: showReview
    });
});



router.post('/application/how_you_run_your_service/check_your_answers', function (req, res) {
  // Complete tag
  if (req.session.data['pass-twelve-month'] == "Yes"){
    req.session.divShow = true;
  } else {
    req.session.divShow = false;
  }


  res.render('application/how_you_run_your_service/check_your_answers', {
    optional: true,
    divShow: req.session.divShow
  });
});

module.exports = router
