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

router.get('/application/current-application/view-full-form', function (req, res) {
  // Complete tag
  req.session.NumberOfPeople = req.session.NumberOfPeople || req.query['NumberOfPeople'] || false;
  req.session.TypeOfCare = req.session.TypeOfCare || req.query['TypeOfCare'] || false;


  var showFullForm = false;

  if (req.session.NumberOfPeople && req.session.TypeOfCare) showFullForm=true;

  res.render('application/current-application/view-full-form', {
    NumberOfPeople: req.session.NumberOfPeople,
    TypeOfCare: req.session.TypeOfCare,
    showFullForm: showFullForm
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

router.post('/application/current-application/view-full-form/check-answers-type-of-care-provided', function (req, res) {
  // Complete tag
  if (req.session.data['technology-check'] == "Yes"){
    req.session.divShow2 = true;
  } else {
    req.session.divShow2 = false;
  }


  res.render('application/current-application/view-full-form/check-answers-type-of-care-provided', {
    optional: true,
    divShow2: req.session.divShow2
  });
});

router.post('/application/your_staff/check_your_answers', function (req, res) {
  // Complete tag
  if (req.session.data['service-employ-check'] == "Yes"){
    req.session.serviceEmployShow = true;
  } else {
    req.session.serviceEmployShow = false;
  }

  if (req.session.data['staff-less-than-12-check'] == "Yes"){
    req.session.staffLessThan12Show = true;
  } else {
    req.session.staffLessThan12Show = false;
  }

  if (req.session.data['staff-vacancy-check'] == "Yes"){
    req.session.staffVacancyShow = true;
  } else {
    req.session.staffVacancyShow = false;
  }

  if (req.session.data['post-employ-check'] == "Yes"){
    req.session.postEmployShow = true;
  } else {
    req.session.postEmployShow = false;
  }

  if (req.session.data['staff-reg-activity-check'] == "Yes"){
    req.session.staffRegActivityShow = true;
  } else {
    req.session.staffRegActivityShow = false;
  }

  if (req.session.data['reg-nurse-check'] == "Yes"){
    req.session.regNurseShow = true;
  } else {
    req.session.regNurseShow = false;
  }

  if (req.session.data['volunteer-check'] == "Yes"){
    req.session.volunteerShow = true;
  } else {
    req.session.volunteerShow = false;
  }

  if (req.session.data['placement-student-check'] == "Yes"){
    req.session.placementStudentShow = true;
  } else {
    req.session.placementStudentShow = false;
  }

  if (req.session.data['apprentice-check'] == "Yes"){
    req.session.apprenticeShow = true;
  } else {
    req.session.apprenticeShow = false;
  }


  res.render('application/your_staff/check_your_answers', {
    optional: true,
    serviceEmployShow: req.session.serviceEmployShow,
    staffLessThan12Show: req.session.staffLessThan12Show,
    staffVacancyShow: req.session.staffVacancyShow,
    postEmployShow: req.session.postEmployShow,
    staffRegActivityShow: req.session.staffRegActivityShow,
    regNurseShow: req.session.regNurseShow,
    volunteerShow: req.session.volunteerShow,
    placementStudentShow: req.session.placementStudentShow,
    apprenticeShow: req.session.apprenticeShow

  });
});

router.get('/application/your_staff/check_your_answers', function (req, res) {
  // Complete tag
  if (req.session.data['service-employ-check'] == "Yes"){
    req.session.serviceEmployShow = true;
  } else {
    req.session.serviceEmployShow = false;
  }

  if (req.session.data['staff-less-than-12-check'] == "Yes"){
    req.session.staffLessThan12Show = true;
  } else {
    req.session.staffLessThan12Show = false;
  }

  if (req.session.data['staff-vacancy-check'] == "Yes"){
    req.session.staffVacancyShow = true;
  } else {
    req.session.staffVacancyShow = false;
  }

  if (req.session.data['post-employ-check'] == "Yes"){
    req.session.postEmployShow = true;
  } else {
    req.session.postEmployShow = false;
  }

  if (req.session.data['staff-reg-activity-check'] == "Yes"){
    req.session.staffRegActivityShow = true;
  } else {
    req.session.staffRegActivityShow = false;
  }

  if (req.session.data['reg-nurse-check'] == "Yes"){
    req.session.regNurseShow = true;
  } else {
    req.session.regNurseShow = false;
  }

  if (req.session.data['volunteer-check'] == "Yes"){
    req.session.volunteerShow = true;
  } else {
    req.session.volunteerShow = false;
  }

  if (req.session.data['placement-student-check'] == "Yes"){
    req.session.placementStudentShow = true;
  } else {
    req.session.placementStudentShow = false;
  }

  if (req.session.data['apprentice-check'] == "Yes"){
    req.session.apprenticeShow = true;
  } else {
    req.session.apprenticeShow = false;
  }


  res.render('application/your_staff/check_your_answers', {
    optional: true,
    serviceEmployShow: req.session.serviceEmployShow,
    staffLessThan12Show: req.session.staffLessThan12Show,
    staffVacancyShow: req.session.staffVacancyShow,
    postEmployShow: req.session.postEmployShow,
    staffRegActivityShow: req.session.staffRegActivityShow,
    regNurseShow: req.session.regNurseShow,
    volunteerShow: req.session.volunteerShow,
    placementStudentShow: req.session.placementStudentShow,
    apprenticeShow: req.session.apprenticeShow

  });
});



router.get('/application/review', function (req, res) {
  // Complete tag
  if (req.session.data['service-employ-check'] == "Yes"){
    req.session.serviceEmployShow = true;
  } else {
    req.session.serviceEmployShow = false;
  }

  if (req.session.data['staff-less-than-12-check'] == "Yes"){
    req.session.staffLessThan12Show = true;
  } else {
    req.session.staffLessThan12Show = false;
  }

  if (req.session.data['staff-vacancy-check'] == "Yes"){
    req.session.staffVacancyShow = true;
  } else {
    req.session.staffVacancyShow = false;
  }

  if (req.session.data['post-employ-check'] == "Yes"){
    req.session.postEmployShow = true;
  } else {
    req.session.postEmployShow = false;
  }

  if (req.session.data['staff-reg-activity-check'] == "Yes"){
    req.session.staffRegActivityShow = true;
  } else {
    req.session.staffRegActivityShow = false;
  }

  if (req.session.data['reg-nurse-check'] == "Yes"){
    req.session.regNurseShow = true;
  } else {
    req.session.regNurseShow = false;
  }

  if (req.session.data['volunteer-check'] == "Yes"){
    req.session.volunteerShow = true;
  } else {
    req.session.volunteerShow = false;
  }

  if (req.session.data['placement-student-check'] == "Yes"){
    req.session.placementStudentShow = true;
  } else {
    req.session.placementStudentShow = false;
  }

  if (req.session.data['apprentice-check'] == "Yes"){
    req.session.apprenticeShow = true;
  } else {
    req.session.apprenticeShow = false;
  }


  res.render('application/review', {
    optional: true,
    serviceEmployShow: req.session.serviceEmployShow,
    staffLessThan12Show: req.session.staffLessThan12Show,
    staffVacancyShow: req.session.staffVacancyShow,
    postEmployShow: req.session.postEmployShow,
    staffRegActivityShow: req.session.staffRegActivityShow,
    regNurseShow: req.session.regNurseShow,
    volunteerShow: req.session.volunteerShow,
    placementStudentShow: req.session.placementStudentShow,
    apprenticeShow: req.session.apprenticeShow

  });
});

module.exports = router
