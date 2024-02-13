const userController = require('../controller/user-controller');

const authUserMiddleware = require('../middlware/auth-user-middleware');
const authAdminMiddleware = require('../middlware/auth-admin-middleware');

const { Router } = require('express');
const router = Router();

router.get('/', authUserMiddleware, authAdminMiddleware, userController.getUsers)
router.put('/:id/update', authUserMiddleware, authAdminMiddleware, userController.updateUser)
router.delete('/:id/delete', authUserMiddleware, authAdminMiddleware, userController.deleteUser)
router.put('/:id/revive', authUserMiddleware, authAdminMiddleware, userController.reviveUser)

module.exports = router;