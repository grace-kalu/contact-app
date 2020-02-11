let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Contact Model
let contactSchema = require("../models/Contact");

// CREATE Contact
router.route('/create-contact').post((request, response, next) => {
  contactSchema.create(request.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      response.json(data)
    }
  })
});
// READ Contacts
router.route('/').get((request, response) => {
  contactSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      response.json(data)
    }
  })
});

// View Single Contact
router.route('/edit-contact/:id').get((request, response) => {
  contactSchema.findById(request.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      response.json(data)
    }
  })
})

// Update Contact
router.route('/update-contact/:id').put((request, response, next) => {
  contactSchema.findByIdAndUpdate(request.params.id, {
    $set: request.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      response.json(data)
      console.log('Contact updated successfully !')
    }
  })
})

// Delete Student
router.route('/delete-contact/:id').delete((request, response, next) => {
  contactSchema.findByIdAndRemove(request.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      response.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;