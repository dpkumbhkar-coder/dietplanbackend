const router = require('express').Router();
const forgetPassword = require('../controllers/Password/forgetPassword')
const resetPassword = require('../controllers/Password/resetPassword')
router.post('/forgetpassword',forgetPassword);
router.post('/reset-password/:token',resetPassword)

module.exports = router ;