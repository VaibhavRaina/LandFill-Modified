const Land = require('../models/land.js');

const Review = require(`../models/review.js`);


module.exports.createReview = async function (req, res) {
    const { id } = req.params;
    const land = await Land.findById(id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    land.reviews.push(review);
    await review.save();
    await land.save();
    req.flash(`success`, `Successfully made a review `);
    res.redirect(`/lands/${land._id}`);


}

module.exports.updateReview = async function (req, res) {
    const { id, reviewId } = req.params;
    await Land.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/lands/${id}`);
}

