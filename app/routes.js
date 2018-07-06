const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

router.get('/task_list', function (req, res) {
  // Complete tag
  req.session.runService = req.session.runService || req.query['runService'] || false;


  req.session.peopleService = req.session.peopleService || req.query['peopleService'] || false;
  req.session.staffNumbers = req.session.staffNumbers || req.query['staffNumbers'] || false;
  req.session.howService = req.session.howService || req.query['howService'] || false;

  res.render('/task_list', {
    peopleService: req.session.peopleService,
    staffNumbers: req.session.staffNumbers,
    howService: req.session.howService,

    });
});




router.get('/application/task_list?details=true', function(req, res) {
  res.render('/application/task_list', { 'detail' : "asdsadsadsa" });
});

module.exports = router
