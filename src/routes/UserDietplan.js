const router = require("express").Router();
const auth = require('../middlewares/auth');
const getMyDeitPlan = require('../controllers/userDietplan/getMyDietPlan.controller');
const createMyDietPlan = require('../controllers/userDietplan/createMyDietPlan.controller');
const updateMyDietPlan = require('../controllers/userDietplan/updateMyDietPlan.controller');
const deleteMyDietPlan = require('../controllers/userDietplan/deleteMyDietPlan.cntroller')

router.get('/my-dietplans',auth , getMyDeitPlan)
router.post('/create-dietplans',auth,createMyDietPlan)
router.put('/dietplan/:planId',auth , updateMyDietPlan)
router.delete('/dietplan/:planId',auth ,deleteMyDietPlan)
module.exports = router ;