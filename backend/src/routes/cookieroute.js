import express from "express"
import * as cookieroutes from '../controllers/cookiecontrollers.js'
const router = express.Router();

router.route('/setcookie').post(cookieroutes.setcookie);
router.route('/getcookie').get(cookieroutes.getCookie);

export default router;