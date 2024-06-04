const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});

const Joi = BaseJoi.extend(extension)

module.exports.landSchema = Joi.object({
    land: Joi.object({
        title: Joi.string().required().escapeHTML(),
        price: Joi.number().required().min(0),
        length: Joi.number().required().min(0).max(10000),
        breadth: Joi.number().required().min(0).max(10000),
        area: Joi.number().required().min(0),

        country: Joi.string().required().escapeHTML().min(1).max(10),
        state: Joi.string().required().escapeHTML().min(1).max(10),
        plot: Joi.string().required().escapeHTML().min(1).max(10),
        village: Joi.string().escapeHTML().min(1).max(20),
        street: Joi.string().escapeHTML().min(1).max(20),
        landmark: Joi.string().escapeHTML().min(1).max(15),
        city: Joi.string().required().escapeHTML().min(1).max(10),
        pincode: Joi.number().required().min(1).max(6),

        highlights: Joi.array().required(),
        landType: Joi.string().required(),
        description: Joi.string().required().escapeHTML(),
        wall: Joi.string().escapeHTML(),
        gates: Joi.number(),
        possession: Joi.string().escapeHTML(),
    }).required(),
    deleteImages: Joi.array()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required().escapeHTML()
    }).required()
})