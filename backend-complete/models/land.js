const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const Review = require(`./review`);
const { number } = require("joi");
const opts = { toJSON: { virtuals: true } };

const ImageSchema = new Schema(
    {
        url: String,
        filename: String,
    }
)
ImageSchema.virtual(`thumbnail`).get(function () {
    return this.url.replace(`/upload`, `/upload/w_200`)
})


const LandSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    images: [ImageSchema],
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: `User`

    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: `Review`
        }
    ],
    geometry: {
        type: {
            type: String,
            enum: ["Point"],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
}, opts);

LandSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: { $in: doc.reviews }
        });
    }
});

LandSchema.virtual(`properties.popUpMarkup`).get(function () {
    return `<strong><a href="/lands/${this._id}">${this.title}</a></strong>
    <p>${this.description.substring(0, 20)}...</p>`
})




module.exports = mongoose.model(`Land`, LandSchema);