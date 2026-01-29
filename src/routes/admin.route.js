const router = require('express').Router();
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const  createDietPlain  = require('../controllers/admin/createDietPlain.controller');
const getAllUser = require('../controllers/admin/getUsers.admin.controller')
const getUserDietPlan = require('../controllers/admin/getUserDietPlan.admin.controller')
const updateDietPlan = require('../controllers/admin/updateDietPlan.admin.controller')
const deleteDeitPlain = require('../controllers/admin/deleteDietPlan.admin.controller')

router.post('/dietplan',auth , admin , createDietPlain);
router.get('/getusers',auth , admin ,getAllUser)
router.get('/getusers/:userId/dietplans',auth , admin ,getUserDietPlan)
router.put('/dietplan/:planId',auth , admin , updateDietPlan)
router.delete('/dietplan/:planId',auth,admin,deleteDeitPlain)
module.exports = router ;
    