const authController = require('../controller/auth-controller');

const { Router } = require('express');
const router = Router();

router.post('/register', authController.register)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.get('/refresh', authController.refresh)

module.exports = router;