const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ensureAuthenticated } = require('../config/auth')

//Welcome page
router.get('/', (req,res) => {
    res.render("welcome")
})

//Dashboard
// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
)

module.exports = router