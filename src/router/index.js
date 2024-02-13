const authRouter = require('./auth-router');
const userRouter = require('./user-router');
const externalApisRouter = require('./external-apis-router')

const { Router } = require('express');
const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/external-apis', externalApisRouter);

module.exports = router;