const router = require('express').Router()
const signupUser = require('../controllers/UserController/UserSignupController')
const UserSignIn = require('../controllers/UserController/UserSignInController')
router.post('/signup',signupUser) ;
router.post('/signin',UserSignIn)

module.exports = router ;