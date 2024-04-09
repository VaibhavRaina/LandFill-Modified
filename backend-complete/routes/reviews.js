const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require(`../utils/catchAsync`);
const { validateReview, isLoggedIn, isReviewAuthor } = require(`../middleware.js`);
const review = require(`../controllers/reviews.js`)



router.post(`/`, isLoggedIn, validateReview, catchAsync(review.createReview))

router.delete(`/:reviewId`, isReviewAuthor, catchAsync(review.updateReview))


module.exports = router;