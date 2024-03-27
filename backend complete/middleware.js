const Land = require('./models/land.js');
const { landSchema, reviewSchema } = require(`./schemas.js`)
const ExpressError = require('./utils/ExpressError');
const Review = require('./models/review.js');



module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'You must be logged in first!');
        return res.redirect('/login');
    }
    next();
}

module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}

module.exports.validateLand = function (req, res, next) {

    const { error } = landSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(`,`);
        throw new ExpressError(msg, 400);

    } else {
        next();
    }
}

module.exports.validateReview = function (req, res, next) {

    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(`,`);
        throw new ExpressError(msg, 400);

    } else {
        next();
    }
}

module.exports.isAuthor = async function (req, res, next) {
    const { id } = req.params;
    const land = await Land.findById(id);
    if (!land.author.equals(req.user._id)) {
        req.flash(`error`, `You do not permission to do that !`)
        res.redirect(`/lands/${id}`);
    }
    next();
}
module.exports.isReviewAuthor = async function (req, res, next) {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review.author.equals(req.user._id)) {
        req.flash(`error`, `You do not permission to do that !`)
        res.redirect(`/lands/${id}`);
    }
    next();
}