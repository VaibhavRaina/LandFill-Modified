const express = require(`express`);
const router = express.Router();
const passport = require(`passport`);
const catchAsync = require(`../utils/catchAsync`);
const user = require(`../controllers/users`)

router.route('/register')
    .post(catchAsync(user.register));

router.route('/login')
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), user.login)

router.get('/logout', user.logout)

module.exports = router;